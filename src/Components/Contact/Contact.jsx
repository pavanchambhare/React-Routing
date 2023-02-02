import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;