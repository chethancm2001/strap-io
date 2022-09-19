const fieldModel = require('../models/fieldModel')

async function createfield(req,res){
let field = new fieldModel({
name:'temperature',
createdby:'6321f0f7263bbef543f9e69d',
channel:'6321f24ceb1848db8273ebda',
})
try{
    let result = await field.save()
    res.send(result)
}
catch(err){
res.status(400).json({"error":err})
}

}
module.exports = createfield