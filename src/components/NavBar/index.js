import React from "react";
import "./style.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavMenu"
        aria-controls="navbarNavMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavMenu"
      >
        <ul className="navbar-nav">
          <li className="nav-item navbar-text">
            <a className="nav-link" href="#">
              PROJECTS
            </a>
          </li>
          <li className="nav-item navbar-text">
            <a className="nav-link" href="#">
              ABOUT
            </a>
          </li>
          <a className="navbar-brand" href="#">
            ALEXA STEF
          </a>

          <li className="nav-item navbar-text">
            <a className="nav-link" href="#">
              RESUME
            </a>
          </li>
          <li className="nav-item navbar-text">
            <a className="nav-link" href="#">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
