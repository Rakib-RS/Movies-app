const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Movie = new Schema(
    {
        name:{type:String,required:true},
        time: {type:[String],required:true},
        ratting: {type:Number,required:true}

    },
    {
        timestamps:true
    }

);
module.exports = mongoose.model('movies',Movie);