const channelModel = require('../../models/channelModel')

async function getchannels(req,res){
let userid = '6321f0f7263bbef543f9e69d'
let result = await channelModel.find({createdby:userid})
res.send(result)
}
module.exports = getchannels