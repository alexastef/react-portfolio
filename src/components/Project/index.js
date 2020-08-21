import React from "react";
import projects from "../../projects.json";

// need to change the list items for the technologies to a function
// probably should break this down into further components, at least for the list and then pass the data
// image links should be hosted so they're consistent
function Project() {
    return projects.map(project => {
        if (projects.indexOf(project) === 0 || projects.indexOf(project) %2 === 0 ) {
            return (
                <div className="row">
                    <div className="col-md-4">
                        <img src={project.image} alt={project.title}></img>
                    </div>
                    <div className="col-md-8">
                    <h4 className="projectTitle">{project.title}</h4>
                    <p className="projectAbout">{project.about}</p>
                    <ul className="technologies">
                        <li>{project.technologies[0]}</li>
                        <li>{project.technologies[1]}</li>
                    </ul>
                    <button type="button" className="btn btn-info"><a className="repoLink" href={project.repo}>Repo</a></button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row">
                    <div className="col-md-8">
                    <h4 className="projectTitle">{project.title}</h4>
                    <p className="projectAbout">{project.about}</p>
                    <ul className="technologies">
                        <li>{project.technologies[0]}</li>
                        <li>{project.technologies[1]}</li>
                    </ul>
                    <button type="button" className="btn btn-info"><a className="repoLink" href={project.repo}>Repo</a></button>
                    </div>
                    <div className="col-md-4">
                        <img src={project.image} alt={project.title}></img>
                    </div>
                </div>
            )
        }
    })
}

export default Project;