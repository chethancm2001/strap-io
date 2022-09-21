const router = require('express').Router()
const createuser = require('../controllers/postcontrollers/createuser')
const createchannel = require('../controllers/postcontrollers/createchannel')
const createfield = require('../controllers/postcontrollers/createfield')
const updatefield = require('../controllers/postcontrollers/updatefield')
const getchannels = require('../controllers/getcontrollers/getchannels')
const getfields = require('../controllers/getcontrollers/getfields')
const login = require('../controllers/auth/login')
const userauth = require('../middleware/userauth')
const checkchannel = require('../middleware/checkchannel')
const verifyemail = require('../controllers/auth/verifyemail')
//routes for post
router.post('/api/createuser',createuser)

router.post('/api/createchannel',userauth,createchannel)

router.post('/api/createfield/:channel',userauth,checkchannel,createfield)

router.post('/api/update',updatefield)

router.post('/api/login',login)

//routes for get

//for me

//routes for all the channels
router.get('/api/channels',userauth,getchannels)
//routes for all the fields

//it uses query
router.get('/api/fields',userauth,getfields)



//post route for hardware
router.post('/api/post/:channel',updatefield)

//for verifly the email
router.get('/api/verifly-email/:userid',verifyemail)

module.exports = router

//user id = 6321f0f7263bbef543f9e69d
//channel id = 6321f24ceb1848db8273ebda
//field id = 6322a1a6d7a8fc309c2b0418

//http://localhost:3000/api/fields?channel=6321f24ceb1848db8273ebda