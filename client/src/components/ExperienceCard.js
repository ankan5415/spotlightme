import React from "react";

const convertToHumanDate = (DateString) => {
  const res = new Date(DateString);
  return res.toLocaleString("en-us", { month: "short", year: "numeric" });
};

const createTags = (technologies) => {
  const tech = technologies ? technologies.split(", ") : [];

  return tech.map((elt, index) => {
    return (
      <span className="technology" key={index}>
        {elt}
      </span>
    );
  });
};

function ExperienceCard(props) {
  return (
    <div className="exp-item">
      <div className="job">
        <a className="company strike" href={props.data.link}>
          {props.data.name}
        </a>

        {props.data.status === "Education" && (
          <div className="title">{props.data.role}</div>
        )}

        <div className="duration">
          {convertToHumanDate(props.data.startDate)}
          {props.data.status === "Project" &&
            props.data.end &&
            ` ~ ${convertToHumanDate(props.data.end)}`}
          {props.data.status === "Work" &&
            (props.data.end
              ? ` ~ ${convertToHumanDate(props.data.end)}`
              : " ~ Present")}
        </div>
      </div>
      <div className="description">
        <p>{props.data.description}</p>
        {createTags(props.data.technologies)}
      </div>
    </div>
  );
}
export default ExperienceCard;
