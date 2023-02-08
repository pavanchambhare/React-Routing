import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link} from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Project from "../Project/Project";
import "./navbar.css";
import logo from "../../assets/logo.png";



const Navbar = ({ children }) => {



  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

   const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
    },
    show: {
      width: "140px",
      padding: "5px 10px",
      opacity: 1,
      transition: {
        deration: 0.2,
      },
    },
   }

  return (
  <>
    <nav className="navbar">
    <img src={logo} alt="logo.png" />
      <div  className="navbar-container">
        <motion.div animate={{ width: isOpen ? "200px" : "40px"}} className="navbar-header">
       
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
     
        </motion.div>
      </div>
    </nav> 
    
    <Home />
    <About />
    <Project />
    <Contact />

    
    </>
  );
};

export default Navbar;
