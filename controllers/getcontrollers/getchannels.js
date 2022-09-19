const channelModel = require('../../models/channelModel')

async function getchannels(req,res){
let userid = req.id
let result = await channelModel.find({createdby:userid})
res.send(result)
}
module.exports = getchannels