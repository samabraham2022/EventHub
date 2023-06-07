import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../styles/LoginForm.css"
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
let API_URL = 'http://127.0.0.1:8000/login/'

const LoginForm = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [response, setResponse] = useState([]);
    const [Error, setError] = useState('');
    const navigate = useNavigate();
    const submit = e => {
        e.preventDefault()
        if(Email=== ""){
            setError('Enter Email/Password')
        }
        else{
            fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify({ Email , Password }),
                headers: { 'Content-Type': 'application/json' },
              }).then(res => { 
                  if (res.status!== 200) {
                      setError('Enter Email/Password')
                  }
                  return res.json()
              }).then(data => {
                  console.log(data)
                  if( data.Success){
                      navigate("/Homepage",{state:{User_id:data.id,Email:data.Email}})
                  }
                  else{
                      setError(data.Response)
                  }
                  setResponse(data)
              });
              sessionStorage.setItem("UserData", JSON.stringify(response))

        }
        
          
      }
      console.log(sessionStorage.getItem("UserData"))
      

  return (
    <form>
        <h1>Welcome Back!</h1>
        <h5>To Event Hub</h5>
        <TextField  value = {Email} onChange={e => setEmail(e.target.value)} id="Email"label="Email" variant="filled" /><br/><br/>
        <TextField  value = {Password} onChange={e => setPassword(e.target.value)} id="Password"type={'password'} label="Password" variant="filled" /><br/>
        <Button id="Button"  onClick = {submit} variant="contained">Login</Button>
        <h6>{Error}</h6>
        <a href="google.com"> Register Now ! </a>
    </form>
  )
}

export default LoginForm