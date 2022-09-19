const express  = require('express')
const config = require('./config')
const router = require('./routes/routes')

let app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)



config()
app.listen(3000,()=>{
    console.log("server is runing")
})