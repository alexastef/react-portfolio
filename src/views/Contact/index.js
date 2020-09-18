import React from "react";
import ContactForm from "../../components/ContactForm";
import "./style.css";

function Contact() {
  return (
    <div className="viewFive">
      <div className="row contact-row">
        <div className="formDiv" id="contact">
          <h3 className="viewTitle" id="contactTitle">
            GET IN TOUCH
          </h3>

          <hr></hr>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
