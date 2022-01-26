const mongoose = require('mongoose');

const {Schema} = mongoose;

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
  WhippedCream:{
      type: String,
  },
  cinnamon:{
      type: String,

  },
  //espresso shot
  espresso:{
      type: Number,
      default:2,
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
const Addin = mongoose.model('Hcaddin', AddinSchema);
module.exports = Addin;