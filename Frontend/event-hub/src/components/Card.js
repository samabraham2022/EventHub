import React from "react";
import "../styles/card.css";
export default function MediaCard(props) {
  function Register(){
    console.log(props.id);
  }
  
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
      <h4 onClick={Register}> Register-{">"}</h4>
    </div>
  );
}
