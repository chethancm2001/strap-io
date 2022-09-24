const mongoose = require('mongoose')
require('dotenv').config()
const webpush = require('web-push')

module.exports = function config(){
  let mongoDbUrl = ''
  
if(process.env.NODE_ENV.trim() == 'production'){
  console.log("runing the production environament")
  mongoDbUrl = process.env.PRODUCTION_DB
}

if(process.env.NODE_ENV.trim() == 'development'){
  mongoDbUrl = process.env.DEVELOPMENT_DB
console.log("Runing the development environament")
}


mongoose.connect(mongoDbUrl)
.then(()=>{console.log("connted to db");}).catch(()=>{console.log("failed to connect to db")})


webpush.setVapidDetails(
    'mailto:developer.chethan@gmail.com',
    process.env.publickKey,
    process.env.privateKey
  );
}
