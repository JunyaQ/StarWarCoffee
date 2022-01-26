const mongoose = require('mongoose');

const {Schema} = mongoose;

const cartSchema = new Schema({
    drinks:[
        {
            type:Schema.Types.ObjectId,
            ref:'Drink'
        }
    ],
    
})
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;