import React from "react";
import "./home.css";
import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";

const Home = () => {
    useEffect(() => {
 window.scroll(0,0)
}, [])

return(


    <div className="home-container">
      
      <h1 className="home-header">Welcome to my Portfolio</h1>
      <p className="home-text">
    
      </p>
    </div>
  );
  

};

export default Home;
