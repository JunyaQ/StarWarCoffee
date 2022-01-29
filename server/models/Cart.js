const { Schema, model } = require('mongoose');



const cartSchema = new Schema({
    drinks:[
        {
            type:Schema.Types.ObjectId,
            ref:'Drink'
        }
    ],
    
})
const Cart = model('Cart', cartSchema);
module.exports = Cart;