const fieldModel = require('../../models/fieldModel')

async function createfield(req,res){
    let {name} = req.body
    channel = req.params.channel
    
    if(req.id != req.createdby){
       return res.status(404).json({"message":"no acess"})
    }
let field = new fieldModel({name,createdby:req.id,channel})
try{
    let result = await field.save()
    res.send(result)
}
catch(err){
res.status(400).json({"error":err})
}

}
module.exports = createfield