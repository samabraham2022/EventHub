import Header from "../components/Header";
import MediaCard from "../components/Card";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
let API_URL = "http://127.0.0.1:8000/Homepage/";

const HomePage = () => {
  const [Products, setProducts] = useState([]);
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

  useEffect(() => {
    fetchProductData();
  }, []);
  const location = useLocation();
  console.log(location.state.User_id, location.state.Email);
  return (
    <div>
      <Header Email={location.state.Email} />
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
          />
        );
      })}
    </div>
  );
};

export default HomePage;
