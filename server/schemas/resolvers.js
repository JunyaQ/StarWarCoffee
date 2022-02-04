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
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('drinks')
  
          return userData;
        }
  
        throw new AuthenticationError('Not logged in');
      },
  
  //   //
  //   // for one
    drink: async(parent, {id})=>{
      // console.log(id);
        return await Drink.findOne({_id:id})
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
    addone: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Drink.find(params).sort({ createdAt: -1 });
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

  
    // addDrink
    addDrink: async (parent, args, context) => {
      if(context!=null){
        const add = await Drink.create({ ...args, email: context.user.email});
        await User.findByIdAndUpdate(
          {_id: context.user._id},
          {$push:{
            drinkname: args.drinkname,
            price: args.price,
            size: args.price,
           // category: args.category,
            description: args.description
          }},
          {new: true}

        );
        return add;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
          
          
      

    // 

    // addDrink: async (parent, args) => {
    //   try {
    //     const drink = await Drink.create(args);
    //     return {drink};
    //   } 
    //   catch (err) {
    //     console.log(err);
    //   }
    // },
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