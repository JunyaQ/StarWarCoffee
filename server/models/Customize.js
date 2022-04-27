const mongoose = require('mongoose');

const { Schema } = mongoose;

const customizeSchema = new Schema({
  size: {
    type: String,
    default: "Grande"
  },
  milk: {
      type: String,
      default: "2% Milk"
  },
 drizzle:{
   type: String,
   default: 'No Drizzle'
 },
 addSyrups:{
   type: String,
   default: 'No Syrup'
 },
 syrup:{
   type: String,
   default: 'Normal Syrup'
 },
 sauces:{
   type: String,
   default: 'No Sauce'
 }
});

const Customize = mongoose.model('Customize', customizeSchema);

module.exports = Customize;