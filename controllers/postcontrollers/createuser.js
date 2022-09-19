const userModel = require('../../models/userModel')

async function createuser(req,res){
    let {name, email,password} = req.body
let user = new userModel({name,email,password})
try{
    let result = await user.save()
    res.send(result)
}
catch(err){
res.status(400).json({"error":"error"})
}

}
module.exports = createuser