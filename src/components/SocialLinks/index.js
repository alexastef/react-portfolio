import React from "react";
// import { Link } from "react-router-dom";

function SocialLinks() {
  return (
    <div className="row">
      <div className="row">
        <h3>alexa.c.stef@gmail.com</h3>
      </div>
      <div className="row">
        <ul className="socialIcons">
          {/* <Link to="linkedin.com/in/alexastef"> */}
            <li>LinkedIn</li>
          {/* </Link> */}
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  )
}

export default SocialLinks;