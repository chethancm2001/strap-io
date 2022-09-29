const express  = require('express')
const config = require('./config/config')
const router = require('./routes/routes')
const cors = require('cors')
let app = express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)


const port = process.env.PORT || 3000
config()
app.listen(port,()=>{
    console.log("server is runing")
})