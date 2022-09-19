const router = require('express').Router()
const createuser = require('../controllers/createuser')
const createchannel = require('../controllers/createchannel')
const createfield = require('../controllers/createfield')
const updatefield = require('../controllers/updatefield')
const getchannels = require('../controllers/getcontrollers/getchannels')
const getfields = require('../controllers/getcontrollers/getfields')
//routes for post
router.post('/api/createuser',createuser)

router.post('/api/createchannel',createchannel)

router.post('/api/createfield',createfield)

router.post('/api/update',updatefield)

router.post('/api/post',(req,res)=>{
    let data = req.query
    res.send(data)
})


//routes for get

//for me

//routes for all the channels
router.get('/api/channels',getchannels)
//routes for all the fields
router.get('/api/fields',getfields)

router.get('/',(req,res)=>{
    res.send("hello from routes")
})

module.exports = router

//user id = 6321f0f7263bbef543f9e69d
//channel id = 6321f24ceb1848db8273ebda
//field id = 6322a1a6d7a8fc309c2b0418

//http://localhost:3000/api/fields?channel=6321f24ceb1848db8273ebda