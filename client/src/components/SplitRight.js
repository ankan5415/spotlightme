import React from "react";
import About from "./About.js";
import Experience from "./Experience.js";

function SplitRight(props) {
  // console.log(props);
  return (
    <div className='right'>
      <div className='right-inner'>
        <About skills={props.info.about} />
        <Experience experiences={props.info.experiences} />
      </div>
    </div>
  );
}

export default SplitRight;
