import React, { useState } from "react";
import { Link,  Router } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
  
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <h1 className="navbar-brand">My Portfolio</h1>
          {/* <button
            className="navbar-toggle-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            
          </button>
        </div>
        <ul
          className={`navbar-menu ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(false)}
        > */}
       
        <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        </ul>
     
        </div>
      </div>
    </nav>

   
  
  );
};

export default Navbar;
