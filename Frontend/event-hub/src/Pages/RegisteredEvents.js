import { useLocation } from "react-router-dom";
import Header from "../components/Header"
const RegisteredEvents = () => {
    const location = useLocation();
    console.log(location.state.User_id, location.state.Email);

    return(
        <div >
        <Header User_id= {location.state.User_id} Email={location.state.Email}/>
        {location.state.User_id+location.state.Email}
        </div>
    )
}
export default RegisteredEvents;
