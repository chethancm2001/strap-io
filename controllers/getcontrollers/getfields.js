let fieldModel = require('../../models/fieldModel')
async function getfields(req,res){
let {channel} = req.query
let result = await fieldModel.find({channel:channel})
res.send(result)
}
module.exports = getfields