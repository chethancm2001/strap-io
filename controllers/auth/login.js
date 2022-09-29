const userModel = require('../../models/userModel')
const jwt = require('jsonwebtoken');
require('dotenv').config()
async function login(req,res){
let {email,password} = req.body

let result = await userModel.findOne({email})

if(result == null){
    return res.status(404).json({message:"No regisered email"})
}
else{
    
    if(result.password == password){
        let token = jwt.sign({id:result._id},process.env.SECRET_KEY)
       return res.json({"token":token})
    }else{
        return res.status(404).json({message:"Incorrect password"})
    }
}
}
module.exports = login