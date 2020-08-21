import React from "react";
import "./style.css";
// import NavBar from "../../components/NavBar";
// want to import the sticky navbar burger here
import Project from "../../components/Project";

function Projects() {

    return (
        <div className="viewTwo">
            <div className="row">
                <div className="col-md">
                    <h3 className="viewTitle" id="projectsTitle">PROJECTS</h3>
                </div>
            </div>
            <div className="row">
                <Project />
            </div>
        </div>
    )
}

export default Projects;