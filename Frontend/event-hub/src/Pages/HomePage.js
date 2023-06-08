import Header from "../components/Header";
import MediaCard from "../components/Card";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
let API_URL = "http://127.0.0.1:8000/Homepage/";

const HomePage = () => {
  const [Products, setProducts] = useState([]);
  const [Registered , getRegistered] = useState([]);
  const fetchProductData = () => {
    fetch(API_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };
  const RegisteredProducts = () => {
    fetch("http://127.0.0.1:8000/Homepage/Event/RegisteredEvents", {
      method: "POST",
      body:JSON.stringify({User_id: User_id}),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => {
      if(res.body){
        return res.json()
      }
    }).then(data => {
      getRegistered(data);

    })
  };
  useEffect(() => {
    fetchProductData()
    RegisteredProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const location = useLocation();
  const User_id = location.state.User_id;
  const Email = location.state.Email;
  return (
    <div>
      <Header User_id= {User_id} Email={Email} />
      {Products.map((data) => {
        return (
          <MediaCard
            key={data.Event_id}
            id={data.Event_id}
            Name={data.Name}
            Category={data.EventCategory}
            Description={data.Description}
            Status={data.Status}
            Date={data.Date}
            Time={data.Time}
            Location={data.Location}
            User_id={location.state.User_id}
            User_registered = {Registered}
          />
        );
      })}
    </div>
  );
};

export default HomePage;
