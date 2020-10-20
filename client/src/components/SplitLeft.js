import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SplitLeft() {
  return (
    <div className="left">
      <div className="bg-img"></div>
      <div className="left-inner">
        <div className="info">
          <h2 className="name">Hi! I'm Abhinav,</h2>
          <div className="subtext">A Software Engineer in Toronto, CA</div>
          <div className="jobStatus">Student at University of Waterloo</div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/abhinavboyed/" target="_blank">
              <FontAwesomeIcon icon={["fab", "linkedin"]} className="fa" />
            </a>
            <a href="https://github.com/abhi5415" target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} className="fa" />
            </a>
            <a href="mailto:aboyed@uwaterloo.ca" target="_blank">
              <FontAwesomeIcon icon={["fas", "envelope"]} className="fa" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplitLeft;
