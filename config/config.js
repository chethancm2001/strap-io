const mongoose = require('mongoose')
require('dotenv').config()
const webpush = require('web-push')
module.exports = function config(){

mongoose.connect(process.env.MONGOURL)
.then(()=>{console.log("connted to db");}).catch(()=>{console.log("failed to connect to db")})


webpush.setVapidDetails(
    'mailto:developer.chethan@gmail.com',
    process.env.publickKey,
    process.env.privateKey
  );
}
