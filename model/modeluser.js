var mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
    email : {
        require :true,
        type : String,
        unique:true
    },
    firstName:{
        type:String,
        required:true, 
    },
    lastName:{
        type:String,
        default:''
    },
    password : {
        require :true,
        type : String,
        unique:true
    },
    age :Number
})


var user = new mongoose.model("user",userSchema)


module.exports = user