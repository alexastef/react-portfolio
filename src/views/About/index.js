import React from "react";
import MeOnWater from "../../img/portrait.jpg";
import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                    <img src={MeOnWater} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">I'm an early-career software engineer with a background in branding and sales. I'm eager to blend my branding experience with my web development skills to enhance the way brands and users interact. All about creativity, collaboration, and learning new things.</p>
                        <p className="bio"><span className="skillHeader">Some skills I bring to the table:</span>
                            <ul className=" skillList text-center">
                                <li className="skill">Adobe Creative Suite (special love for Illustrator)</li>
                                <li className="skill">JavaScript</li>
                                <li className="skill">ReactJS</li>
                                <li className="skill">HTML & CSS</li>
                                <li className="skill">Node</li>
                                <li className="skill">Express</li>
                                <li className="skill">SQL</li>
                                <li className="skill">Logo & Web Design</li>
                                <li className="skill">Project Management</li>
                            </ul>
                        </p>
                        <p className="bio">I look forward to working with you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;