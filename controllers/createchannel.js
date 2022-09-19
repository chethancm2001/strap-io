const channelModel = require('../models/channelModel')

async function createchannel(req,res){
let channel = new channelModel({
   name:"smart agriculture",
   createdby:"6321f0f7263bbef543f9e69d",

})
try{
    let result = await channel.save()
    res.send(result)
}
catch(err){
res.status(400).json({"error":err})
}

}
module.exports = createchannel