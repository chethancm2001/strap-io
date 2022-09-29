let mongoose = require('mongoose')

let subcriptionSchema = mongoose.Schema({
    name:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    subcription:{
        type:mongoose.Schema.Types.Mixed
    }
})

let subcriptionModel = mongoose.model('Subcriptions',subcriptionSchema)
module.exports = subcriptionModel