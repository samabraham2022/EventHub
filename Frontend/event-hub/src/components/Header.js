
// import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';
import '../styles/header.css'
import  {Link} from 'react-router-dom'
const Header = (props) => {
  
  
  return (
    <header>
    <Button><Link  to = "/homepage" state={{ User_id:props.User_id  , Email:props.Email } }>Event Hub</Link></Button>
    <img id="acct"src={require("../Assets/acct.png")} alt="Acct" height="2px" title={props.Email}/>
    <div className="nav-right">
      <ButtonGroup size = "1.5vw" color="primary" variant="text" aria-label="text button group">
        <Button>Your Events</Button>
        <Button><Link  to = "/My_Events" state={{ User_id:props.User_id  , Email:props.Email } } style={{textDecoration: 'none'}} >Registered Events</Link></Button>
        <Button>Logout</Button>
      </ButtonGroup>
      </div>
    </header>
  )
}


export default Header