const channelModel = require('../../models/channelModel')

async function createchannel(req,res){
    let {name} = req.body
    let createdby = req.id
let channel = new channelModel({ name, createdby,})

try{
    let result = await channel.save()
    res.send(result)
}
catch(err){
res.status(400).json({"error":err})
}

}
module.exports = createchannel