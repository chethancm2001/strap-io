const fieldModel = require('../../models/fieldModel')
async function updatefield(req,res){

let channel = req.params.channel
let fieldId = req.query.field
let data = Number((req.body.data))
console.log(data)

let fieldvalue = {value:data}

try{
let result = fieldModel.findByIdAndUpdate({_id:fieldId},{
    $push:{
       data:{value:data,time:Date.now()}
    }
},(err,result)=>{
  if(result != null){
   return  res.send({err,result})

}
if(err){
    return res.status(400).json({"message":"error in data"})
}
})

}
catch(err){
    console.log(err)
   return res.send(err)
}
}

module.exports = updatefield


