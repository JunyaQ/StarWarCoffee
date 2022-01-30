const { Schema, model } = require('mongoose');


const categorySchema = new Schema({
    catname:{
        type:String,
        require: true,
        trim: true
    },
    // subcatname:{
    //     type: String,
    //     require: true,
    //     trim: true
    // }
})

const Category = model('Category',categorySchema);
module.exports = Category;