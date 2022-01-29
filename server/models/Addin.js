const { Schema, model } = require('mongoose');
// only in other model


const AddinSchema = new Schema({
  // add in
  honey:{
      type: Number,
    //   default:'0'
  },
  creamer:{
      type: String,
    //   default:"Splash of 2% milk"
  },
  // cup options:
  cupoption:{
      type: String,
    //   default:"no Room"
  },
  // topping:
  coldForm:{
      type:String,
    //   default:"Cold Form"
  },
  drizzle:{
      type: String,
    //   default: "Caramel Drizzle"
  },
  topping:{
      type: String,

  },
  whippedCream:{
      type: String,
  },
  cinnamon:{
      type: String,

  },
  //espresso shot
  espresso:{
      type: Number,
  },
  addlongshot:{
      type: String,
  },
  addDecaf:{
    type: String,
  },

  // Flavours
  sauces:{
      type: String,
  },
  syrups:{
      type: String,
  }

})
const Addin = model('Addin', AddinSchema);
module.exports = Addin;