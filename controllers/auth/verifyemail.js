let userModel = require('../../models/userModel')

async function verifyemail(req,res){
    let userid = req.params.userid;
    console.log(userid)
    try{
        let result = await userModel.findByIdAndUpdate(userid,{isverified:true},(err,docs)=>{
           
            if(err == null){
                res.status(400).json({"message":"unexpedted error occure"})
            }
            else{
                res.json({"result":docs})
            }
        })
    }
    catch(err){
        res.status(400).json({"message":"unexpedted error occure"})
    }
}
module.exports = verifyemail