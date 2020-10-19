import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SplitLeft() {
  return (
    <div className="split left bg-img">
      <div className="centered">
        <div className="main-header">
        <h1>Hey, I'm Abhinav,</h1>
        </div>
        <h1 className="side-header">
          a <b className="titlebold">Software Engineer </b> in Toronto, CA
        </h1>

        <p>University of Waterloo</p>
        <div className="btn-group">
          <a
            id="btn"
            href="https://www.linkedin.com/in/abhinav-boyed/"
            target="_blank"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>

          <a id="btn" href="https://github.com/abhi5415" target="_blank">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a id="btn" href="mailto:aboyed@uwaterloo.ca" target="_blank">
            <FontAwesomeIcon icon={["fas", "envelope"]} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SplitLeft;
