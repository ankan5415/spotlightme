import React from "react";
import ExperienceCard from "./ExperienceCard";

function ExperienceSection(props) {
  return (
    <div className="content">
      {props.data.map((exp, index) => {
        return <ExperienceCard data={exp} key={index} />;
      })}
    </div>
  );
}
export default ExperienceSection;
