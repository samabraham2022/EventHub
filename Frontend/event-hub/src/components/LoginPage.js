import LoginForm from "./LoginForm"
const LoginPage = () => {
    let Gif = require("../Assets/login_left.gif")
  return (
    
    <div className="Login_Container">
        <div className="column left">
        <img id = "login_left_img"src={Gif} alt="login"/>
        </div>
        <div className="column right">
        <LoginForm/>
        </div>
    </div>
    
  )
}

export default LoginPage