import React from "react";
import projects from "../../projects.json";
import TechListItem from "../TechListItem";

// need to change the list items for the technologies to a function
// probably should break this down into further components, at least for the list and then pass the data
// image links should be hosted so they're consistent
// should these be rendered as cards ?
// change this so that all images render on one side
function Project() {
    return projects.map(project => {
        // project is an even number, it will image left and text right
        if (projects.indexOf(project) === 0 || projects.indexOf(project) %2 === 0 ) {
            return (
                <div className="row projectRow">
                    <div className="col-md-4">
                        <img src={project.image} alt={project.title} width="200px"></img>
                    </div>
                    <div className="col-md-8">
                        <h4 className="projectTitle">{project.title}</h4>
                        <p className="projectAbout">{project.about}</p>
                        <ul className="technologies">
                            <TechListItem techItems={project.technologies}></TechListItem>
                        </ul>
                        <div className="row">
                            <button type="button" className="btn btn-info"><a className="repoLink" href={project.repo}>Repo</a></button>
                        </div>
                    </div>
                 
                </div>
            )
            // otherwise image will be right and text left
        } else {
            return (
                <div className="row projectRow">
                    <div className="col-md-8">
                    <h4 className="projectTitle">{project.title}</h4>
                    <p className="projectAbout">{project.about}</p>
                    <ul className="technologies">
                        <TechListItem techItems={project.technologies}></TechListItem>
                    </ul>
                        <div className="row">
                            <button type="button" className="btn btn-info"><a className="repoLink" href={project.repo}>Repo</a></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={project.image} alt={project.title} width="200px"></img>
                    </div>
                </div>
            )
        }
    })
}

export default Project;