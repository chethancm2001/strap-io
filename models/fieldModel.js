let mongoose = require('mongoose')

let fieldlSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  createdby:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:true
  },
  channel:{
    type:mongoose.Types.ObjectId,
    ref:'Channel',
    required:true
  },
  maxvalue:{
    type:Number
  },
 data:{
  type:[{value:Number,time:{type:Date,defalut:Date.now}}]
},
  createdat:{
    type:Date,
    default:Date.now
  },
  
})

let fieldModel = mongoose.model('Field',fieldlSchema)

module.exports = fieldModel
//field:[{data:String,date:{}}]


//data:{
//   
// }