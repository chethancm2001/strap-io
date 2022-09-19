const jwt = require("jsonwebtoken")

const userauth = async function(req,res,next){
    let token = req.headers.authorization
    if(token == null){
       return res.status(401).json({error:"no authenticated user"})
    }
    else{
        jwt.verify(token,process.env.SECRET_KEY,(err,userid)=>{
            if(err == null){
               req.id = userid.id
                next() 
            }
            else{
            return res.status(401).json({message:"error in authentication"})
            }
        })
    }
}
module.exports = userauth