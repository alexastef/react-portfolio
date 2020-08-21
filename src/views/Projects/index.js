import React from "react";
import "./style.css";
// import projects from "../../projects.json";
// import NavBar from "../../components/NavBar";
import Project from "../../components/Project";

function Projects() {

    // let mappedProjects = projects.map(project => {
    //     return ()
    // })

    return (
        <div className="viewTwo">


        <div className="row">
            <div className="col-md">
                <h3 className="viewTitle">PROJECTS</h3>
            </div>
        </div>
        <div className="row">
            <p>this will have the project components</p>
            <Project />
        </div>
        </div>

    )
}

export default Projects;