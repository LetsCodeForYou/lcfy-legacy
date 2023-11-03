const mongoose = require('mongoose')

const accountOpening = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true
    }
    ,
    email : {
        type : String,
        required : true,
        trim : true
    }
    ,
    password : {
        type : String,
        required : true,
        trim : true
    }
    ,
    role : {
        type : String,
        trim : true,
        default : 'user',
        enum : ["user", "admin", "super-Admin"]
    }
})

const SignUp = mongoose.model("SignUp", accountOpening)

module.exports = SignUp
