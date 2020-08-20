import React from 'react';
import NavBar from "../../components/NavBar";
import "./style.css";
import waterImage from "../../img/water-rotated.jpg";

function MainPage() {
    return (

      <div className="row">
            <NavBar />

        <div className="col-md">
            <div class="mobile-image"><h4>ALEXA STEF</h4></div>
          <div className="intro-text alignCenter">
            <h5>Brand Markerter & Web Developer. <br></br>
            Bringing brands to life through design and interaction.</h5>
          </div>
        </div>
        <div className="col-md">
          <div className="right-image">
            </div>
        </div>
        </div>


    );
}

export default MainPage;

// this page is the landing page with short intro sentence and split screen water and dust