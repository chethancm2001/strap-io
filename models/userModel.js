let mongoose = require('mongoose')

let userSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  createdat:{
    type:Date,
    default:Date.now
  },
  isverified:{
  type:Boolean,
  default:false,
  required:true,
  },
  channels:{
    type:[mongoose.Types.ObjectId],
    ref:'Channel'
  }
})

let userModel = mongoose.model('User',userSchema)

module.exports = userModel