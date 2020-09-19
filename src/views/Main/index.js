import React from "react";
import NavBar from "../../components/NavBar";
import "./style.css";
import { Link } from "react-scroll";

function MainPage() {
  return (
    <div className="row" id="/">
      <NavBar />

      <div className="col-md">
        <div className="mobile-image"></div>
        <div className="intro-text alignCenter">
          <h2 className="mobile-title">ALEXA STEF</h2>
          <br></br>
          <h2 className="intro">Web Developer</h2>
          <br></br>
          <h3>Bringing brands to life through design and interaction.</h3>
          <br></br>
          <br></br>
          <Link to="about"
           activeClass="active"
           spy={true}
           smooth={true}
          >
            <button type="button" className="readMore btn btn-info">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="col-md">
        <div className="right-image"></div>
      </div>
    </div>
  );
}

export default MainPage;