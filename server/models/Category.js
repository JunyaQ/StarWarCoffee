const mongoose = require('mongoose');

const{Schema} = mongoose;

const categorySchema = new Schema({
    catname:{
        type:String,
        require: true,
        trim: true
    },
    subcatname:{
        type: String,
        require: true,
        trim: true
    }
})

const Category = mongoose.model('Category',categorySchema);
module.exports = Category;