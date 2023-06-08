import React from "react";
import "../styles/card.css";
import { useEffect , useState} from "react";
export default function MediaCard(props) {
  const [AlreadyRegistered, GetInfo]  = useState();
  function Register(){
      fetch("http://127.0.0.1:8000/Homepage/Event/Register",{method: "POST",
      body: JSON.stringify({User_id:props.User_id,Event_id:props.id}),headers: { 'Content-Type': 'application/json' },
    }).then(res => {
      if(res.status !== 200){
        alert(res.status);
      }
      return res.json()
    }).then(data  => {
      console.log(data);
      if(data.Success){
        alert("Registered successfully");
      }
      else{
        alert("Already registered");
      }
    })
      
    
  }
  function Registered(){
    const Registered_data  = props.User_registered ;
    for(let i = 0; i < Registered_data.length; i++) {
      if(props.id === Registered_data[i].Event_id){
        GetInfo(true);
      }
    }
  }
  function dummy(){

  }
  useEffect(() => {
    Registered()
  }
  );
  return (
    <div className="Card">
      <div className="img_holder">
        <img
          src={require("../Assets/Default_event.jpg")}
          alt="default_image"
        ></img>
      </div>
      <div className="Info">
        <div className="first">
          <h1 className="Title">{props.Name}</h1>
          <h3><span>Category:</span> {props.Category}</h3>
          <h3 style={{color : props.Status==="OPEN" ? "green":"red"}}> <span>Status:</span>{props.Status}</h3>
        </div>
        <div className="second">
          <h3><span>Description:</span>
          
          {props.Description}
          </h3>
          
        </div>
        <div className="third">
        <h3><span>Date:</span> {props.Date}</h3>
          <h3><span>Time:</span> {props.Time}</h3>
          <h3><span>Location:</span> {props.Location}</h3>
        </div>

         
      </div>
      <h4 style={{backgroundColor: AlreadyRegistered? "green":dummy}} onClick={AlreadyRegistered? dummy:Register}>{AlreadyRegistered? "Registered":"Register ->"}</h4>
    </div>
  );
}
