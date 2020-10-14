import React from "react";
import "./style.css";
import ResumePDF from "../../components/ResumePDF/AStefankiewicz_Resume_2020.pdf";

function Resume() {

    return (
      <div className="viewFour" id="resume">
        <div className="row">
          <div className="col-md">
            <a href={ResumePDF} target="_blank" className="resLink"><h3 className="viewTitle" id="resumeTitle">RESUME</h3></a>
          </div>
        </div>
      </div>
    );
}

export default Resume;