const channelModel = require('../models/channelModel')

async function checkchannel(req,res,next){
    let channel = req.params.channel
    let result = await channelModel.findById(channel)
   
    
    if(result == null)
    res.status(400).json({"message":"no channel is prasent"})
    else{
    
    req.createdby = result.createdby.toString()

    next()
    }
}
module.exports = checkchannel