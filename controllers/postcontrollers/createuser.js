const userModel = require('../../models/userModel')
let mailTransporter = require('../../config/emailconfig')
async function createuser(req,res){
    let {name, email,password} = req.body
let user = new userModel({name,email,password})
try{
    let result = await user.save()
    let id = result._id
    let mailDetails = {
        from: 'developer.chethan@gmail.com',
        to: req.body.email,
        subject: 'verification email',
        text: `please verifiy this email by clicking flowing link https://cloud-app-new.herokuapp.com/verification/${id}`
    };
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        console.log(err,data)
        if(err) {
          return  res.send(err);
        } else {
           return res.send('verifly your email');
        }
    })
}
catch(err){
    console.log(err)
res.status(400).json({"error":"error"})
}

}
module.exports = createuser