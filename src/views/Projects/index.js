import React from "react";
import "./style.css";
import Project2 from "../../components/Project2";

function Projects() {

    return (
        <div className="viewTwo" id="projects">
            <div className="row">
                <div className="col-md">
                    <h3 className="viewTitle" id="projectsTitle">PROJECTS</h3>
                </div>
            </div>
            <div className="row">
                <Project2 />
            </div>
        </div>
    )
}

export default Projects;