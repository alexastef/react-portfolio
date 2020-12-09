import React, { useState } from "react";
import projects from "../../projects.json";
import TechListItem from "../TechListItem";
import "./style.css";

function Project2() {
  // const open=[open, openState] = useState(false);

  function checkRepoLink(project) {
    console.log("inside repo function")
    if (project.repo !== null) {
      return (
        <div className="row">
          <div className="col-sm text-center">
            <a className="repoLink" href={project.repo} target="_blank">
              <button type="button" className="btn btn-info repoBtn">
                Code
              </button>
            </a>
          </div>
          <div className="col-sm text-center">
            <a className="siteLink" href={project.site} target="_blank">
              <button type="button" className="btn btn-info siteBtn">
                Website
              </button>
            </a>
          </div>
        </div>
      );
    } else {
      return (
      <div className="row">
        <div className="col-sm">
        <a className="siteLink" href={project.site} target="_blank"><button type="button" className="btn btn-info siteBtn">Website</button></a>
        </div>
      </div>
      );
    }
  };

  return projects.map((project) => {
    return ( <div className="row">
      <div className="card mb-5 projectCard">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 my-auto">
              <img
                src={project.image}
                alt={project.title}
                width="200px"
                className="card-img img-fluid logo"
              />
            </div>
            <div className="col-md-9">
              <h4 className="card-title">{project.title}</h4>
              <div className="row card-text">
                <p>{project.about}</p>
                <ul className="technologies">
                  <TechListItem techItems={project.technologies}></TechListItem>
                </ul>
              </div>
              {checkRepoLink(project)}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  });
}
//need to import the reactstrap button (1 for site, 1 for repo, 1 for the toggle)

export default Project2;
