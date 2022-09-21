import {Typography,Grid,Paper,Avatar,TextField} from '@mui/material'
import { useState } from 'react'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



function Register(){
    let [name,setusername] = useState('')
    let [password,setpassword] = useState('')
    const [open, setOpen] = useState(false);
    let [message,setmessage] = useState("")
    let [email, setemail] =useState("")
    let [cpassword,setcpassword] = useState("")
    let paperstyle = {
      height:"75vh",
      padding:"20px",
      width:'300px',
      margin:'50px auto'
    }
    let marginStyle={
      margin:'15px 0px 0px 0px '
    }
    let buttonStyle={
      marginTop:'40px'
    }
    function submit(){
        if(!name){
          setmessage('Name is required')  
          return setOpen(true)
        }
        if(!email){
            setmessage('email is required')  
           return setOpen(true) 
        }
        if(password.length < 6 ){
            setmessage('password should be greater than 6 charcter')  
           return setOpen(true)  
        }
        if(password != cpassword){
            setmessage('password mismatch')  
            return setOpen(true)    
        }
      

     async function makepost(){
        try{
      let result = await axios.post('http://localhost:4000/api/createuser',{name,email,password})
      
      console.log(result.data)
      setmessage(result.data)
      return setOpen(true)   

      
      }
      catch(exp){
        console.log(exp)
     setmessage(exp.response.data)
     setOpen(true)
      }
      
    }
    makepost()
}
    function handleClose(){
      setOpen(false)
    }

    return (
        <div>
       <Grid>
        <Paper elevation={10} style={paperstyle}>
          <Grid align={'center'}>
        <Avatar sx={{ bgcolor: 'green' }}src="/broken-image.jpg" />
          <Typography sx={{fontWeight: 'bold'}} variant={'h3'} >Sign up</Typography>
          <TextField style={marginStyle} id="standard-basic" label="name" variant="standard" fullWidth required autoComplete='false' onChange={(e)=>{setusername(e.target.value)}}/>
          <TextField style={marginStyle} id="standard-basic" label="Email" variant="standard" fullWidth required autoComplete='false' onChange={(e)=>{setemail(e.target.value)}}/>
          <TextField style={marginStyle} id="standard-basic" type="password" label="password" variant="standard" fullWidth required autoComplete='false'  onChange={(e)=>{setpassword(e.target.value)}}/>
          <TextField style={marginStyle} id="standard-basic" type="password" label="confirm password" variant="standard" fullWidth required autoComplete='false'  onChange={(e)=>{setcpassword(e.target.value)}}/>
          <Button onClick={submit}style={buttonStyle}  variant="contained" color="success" fullWidth>
    Login
  </Button >
          </Grid>
        </Paper>


      
       </Grid>
         
       <Stack spacing={2} sx={{ width: '100%' }}>
    
    <Snackbar open={open} anchorOrigin={{ vertical:'bottom' ,horizontal:'right' }} autoHideDuration={2000}  onClose={handleClose} >
      <Alert  onClose={handleClose}  severity="error" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
    
  </Stack>
       </div>
    );
}
export default Register