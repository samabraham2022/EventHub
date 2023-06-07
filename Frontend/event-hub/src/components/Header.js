
// import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';
import '../styles/header.css'
const Header = (props) => {
  return (
    <header>
    <Button>Event Hub</Button>
    <img id="acct"src={require("../Assets/acct.png")} alt="Acct" height="2px" title={props.Email}/>
    <div className="nav-right">
      <ButtonGroup size = "1.5vw" color="primary" variant="text" aria-label="text button group">
        <Button>Your Events</Button>
        <Button>Registered Events</Button>
        <Button>Logout</Button>
      </ButtonGroup>
      </div>
    </header>
  )
}


export default Header