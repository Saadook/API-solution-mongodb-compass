var mongoose = require('mongoose')
var schema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    color:{
        type: String,
        required:true
    },
    miles:{
        type: Number,
        required:true
    },
    rent_or_sell:{
        type: Boolean,
        required:true
    }
    
})
var car = new mongoose.model('car',schema);
module.exports = car;