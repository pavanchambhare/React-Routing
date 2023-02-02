import React from 'react';
import './App.css';
import { Route,Routes} from 'react-router-dom'
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import NotFound from './Components/NotFound';






function App()   {
  return (


    <Routes>  
  {/* <Route path="/" element={<Navbar/>} /> */}
  
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/project" element={<Project/>} />
    <Route path="/contact" element={<Contact/>} />
   < Route element={NotFound} />
  </Routes>
 


);
}

export default App;