const SignUp = require('./../../model/account.model/account.opening.model')
const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcryptjs')



exports.creatingAccount = async(req, res)=>{
    const {username,email,password} = req.body
    
    // crypting the password
    const cryptedPassword = await bcrypt.hash(password, 12)
    
    const openingAcc = await SignUp.create({username,email,password:cryptedPassword})

    res.status(200).json({
        status : "success",
        data : {
            username,
            email : email,
            password : cryptedPassword
        }
    })
}

