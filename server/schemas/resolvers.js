const { Category, Drink, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");



const resolvers = {
  Query: {
    users: async () => {
      return User.find()
      .select('-__v -password');
    },

    /////////////////////
      // user info, only login
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({id: context.user.id })// _id: context.user._id
          .select("-__v -password")
          .populate("cart");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
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
  
    drinks: async()=>{
        return await Drink.find()
        .populate('category');
        // .then(data=>
        //   console.log(data));
        //.populate('addin');
    },
    // for cart only login
    cart:async(parent,{_id},context)=>{
        if(context.user){
            const user = await User.findById (context.user._id);
            return user.cart;
        }
        
        throw new AuthenticationError("Not logged in");
    }
    
  
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

    // addCart: async (parent, args, context) => {
    //     if (context.User) {
    //         const mycart = new Cart({drinks});
    //         await User.findByIdAndUpdate(context.user._id),{$push: {Cart:mycart}};// ?
    //         return mycart;
    //     }
  
    //     throw new AuthenticationError("You need to be logged in!");
    //   },

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