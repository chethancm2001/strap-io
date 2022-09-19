const userModel = require('../models/userModel')

async function createuser(req,res){
let user = new userModel({
    name:"chethan",
    email:"chethancm2001kadur@gmail.com",
    password:"chethan"
})
try{
    let result = await user.save()
    res.send(result)
}
catch(err){
res.status(400).json({"error":"error"})
}

}
module.exports = createuser