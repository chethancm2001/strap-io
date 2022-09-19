let mongoose = require('mongoose')

let channelSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  createdby:{
    type:mongoose.Types.ObjectId,
    ref:'User',
    required:true
  },
  fields:{
   type:[mongoose.Types.ObjectId],
   ref:'Field'
  },
  createdat:{
    type:Date,
    default:Date.now
  },
  
})

let channelModel = mongoose.model('Channel',channelSchema)

module.exports = channelModel