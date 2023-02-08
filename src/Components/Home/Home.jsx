import React from "react";
import "./home.css";
import portfolio from '../../assets/portfolio.png';
import { useEffect } from "react";


const Home = () => {
    useEffect(() => {
 window.scroll(0,0)
}, [])

return(


  

     
    <div className="home-container">
      <img src={portfolio} id="portfolio" alt="portfolio.png" />
      <div className="intro">
        <h2>Hello</h2>
       
      <h1>I'm Pavan a Web Developer</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, atque corrupti exercitationem aperiam recusandae itaque quae a laborum enim nulla temporibus culpa nihil asperiores eum est voluptate dignissimos dicta accusantium?</p>
      <button>Hire Me</button>
      </div>
      <h1 className="home-header">Welcome To My Portfolio</h1>
      <p className="home-text">
    
      </p>
    </div>
  );
  

};

export default Home;
