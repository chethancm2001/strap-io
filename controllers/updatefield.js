const fieldModel = require('../models/fieldModel')
async function updatefield(req,res){
let id = "6322a1a6d7a8fc309c2b0418"
try{
let result = fieldModel.findByIdAndUpdate({_id:id},{
    $push:{
        "data":['30']
    }
},(err,result)=>{
    res.send({err,result})
})

}
catch(err){
    console.log(err)
    res.send(err)
}
}

module.exports = updatefield

