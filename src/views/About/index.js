import React from "react";
import MeOnWater from "../../img/myself_waterbackground.png";
import "./style.css";

function About() {

    return (
        <div className="viewThree">
            <div className="row">
                <div className="col-md about-left">
                    <img src={MeOnWater} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <p className="bio">Copy what I have from LinkedIn, a little more casual</p>
                </div>
            </div>
        </div>
    )
}

export default About;