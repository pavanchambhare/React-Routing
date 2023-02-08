import React from "react";
import "./about.css";
import img from '../../assets/about.jpg';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">About Me</h1>
      <img src={img} id="port" alt="about.jpg" />
      <h1>So,  Who Am I ?</h1>
       <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        dictum metus non metus viverra, eu auctor nulla fringilla. Integer
        convallis odio vel turpis sollicitudin, vel congue velit ornare. Nam
        malesuada risus vel euismod dictum. Sed efficitur, nulla a dictum
        commodo, turpis urna tristique mi, eu aliquam dolor velit a nibh.
      </p> 
    </div>
  );
};

export default About;
