const { Category, Drink, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");



const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .select('-__v -password')
      .populate('drinks');
    },

    /////////////////////
      // user info, only login
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ id: context.user._id })
            .select('-__v -password')
            .populate('drinks')
  
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },
  
  //   //
  //   // for one
    drink: async(parent, {id})=>{
        return await Drink.findOne({id})
        .populate('category');
        //.populate('addin');
        //info need
    },
  //   //for all - front page display
    categories:async()=>{
        return await Category.find();
    },
  
    // drinks: async()=>{
    //     return await Drink.find()
    //     .populate('category');
    //     // .then(data=>
    //     //   console.log(data));
    //     //.populate('addin');
    // },
    drinks: async (parent, { category, catname }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (catname) {
        params.name = {
          $regex: catname
        };
      }
      return await Drink.find(params).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user.id);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  
  },
  Mutation: {
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);

        const token = signToken(user);
        return { token, user };
      } 
      catch (err) {
        console.log(err);
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addDrink: async (parent, args, context) => {
      if (context.user) {
        const drink = await Drink.create({ ...args, email: context.user.email });

        await User.findByIdAndUpdate(
          { id: context.user.id },
          { $push: { drinks: drink.id } },
          { new: true }
        );

        return drink;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    }
};

module.exports = resolvers;


// const resolvers = {
//     Query: {
//       helloWorld: () => {
//         return 'Hello world!';
//       }
//     }
//   };
  
//   module.exports = resolvers;