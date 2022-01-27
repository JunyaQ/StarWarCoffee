const mongoose = require('mongoose');

const {Schema} = mongoose;

const drinkSchema = new Schema({
    drinkname:{
        type: String,
        required: true,
        trim: true
    },
    size:{
        type: String,
        required: true,
        default:"grande"
    },
    price:{
        type: Number,
        required: true,
    },
    category:{
        type: Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    addin:{
        type:Schema.Types.ObjectId,
        ref:"Addin",
    }

})

const Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;