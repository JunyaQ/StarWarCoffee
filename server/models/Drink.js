const { Schema, model } = require('mongoose');

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
        type: String,
        required: true,
    },
    category:{
        type: Schema.Types.ObjectId,
        ref:'Category',
        //required:true
    },
    description:{
        type: String
    }

    // addin:{
    //     type:Schema.Types.ObjectId,
    //     ref:"Addin",
    // }

})

const Drink = model('Drink', drinkSchema);
module.exports = Drink;