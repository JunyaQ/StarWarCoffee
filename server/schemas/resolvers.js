const { AuthenticationError } = require('apollo-server-express');
const { User, Drink, Order, Category } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
      categories: async () => {
        return await Category.find();
      },
      // get all drinks
      drinks: async (parent, { category, name }) => {
        const params = {};

        if (category) {
          params.category = category;
        }

        if(name) {
          params.name = {
            $regex: name
          };
        }
        return await Drink.find(params).populate('category');
      },
      // get one drink
      drink: async (parent, {_id}) => {
        return await Product.findById(_id).populate('category');
      },
      // checkout
      order: async (parent, { _id }, context) => {
        if (context.user) {
          const user = await User.findById(context.user._id).populate({
            path: 'orders.drinks'
          });
  
          return user.orders.id(_id);
        }
  
        throw new AuthenticationError('Not logged in');
      },
      // stripe
      checkout: async (parent, args, context) => {
        const url = new URL(context.headers.referer).origin;
        const order = new Order({ drinks: args.drinks });
        const line_items = [];
  
        const { drinks } = await order.populate('drinks').execPopulate();
  
        for (let i = 0; i < drinks.length; i++) {
          const drink = await stripe.products.create({
            name: drinks[i].name,
            description: drinks[i].description,
            images: [`${url}/images/${drinks[i].image}`]
          });
  
          const price = await stripe.prices.create({
            product: drink.id,
            unit_amount: drinks[i].price * 100,
            currency: 'cad',
          });
  
          line_items.push({
            price: price.id,
            quantity: 1
          });
        }
        // stripe
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items,
          mode: 'payment',
          success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${url}/`
        });
  
        return { session: session.id };
      },
      // get user for order history
      user: async (parent, args, context) => {
        if(context.user) {
          const user =  await User.findById(context.user._id).populate({
            path: 'orders.drinks',
            populate: 'category'
          });
          // what is this for? how to we show the info we want for order history page?
          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
          return user;
        }
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      addOrder: async (parent, { drinks }, context) => {
        console.log(context);
        if (context.user) {
          const order = new Order({ drinks });
  
          await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
  
          return order;
        }
  
        throw new AuthenticationError('Not logged in');
      },
      updateUser: async (parent, args, context) => {
        if (context.user) {
          return await User.findByIdAndUpdate(context.user._id, args, { new: true });
        }
  
        throw new AuthenticationError('Not logged in');
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      }

    }
  };

  
  
  module.exports = resolvers;