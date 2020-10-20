import React from "react";
import { Chip } from "@material-ui/core";

const ConvertDate = (DateString) => {
  const res = new Date(DateString);
  return res.toLocaleString("en-us", { month: "short", year: "numeric" });
};

const CreateTags = (technologies, index) => {
  const tech = technologies ? technologies.split(", ") : [];
  console.log(tech);
  return tech.map((elt) => {
    return (
      <span style={{ padding: "2px" }} key={index}>
        <Chip
          variant="outlined"
          color="primary"
          clickable={true}
          size="small"
          label={elt}
        />
      </span>
    );
  });
};

function Experience(props) {
  // console.log(props.experiences)

  let statuses = [];

  for (let experience of props.experiences) {
    if (statuses.indexOf(experience.status) === -1) {
      statuses.push(experience.status);
    }
  }

  let count = 0;
  let DisplayAllExperiences = [];
  for (let status of statuses) {
    let filtered = props.experiences.filter(
      (item) => item.status === status && item.display
    );

    let processed = filtered.map((desc, index) => {
      return (
        //&mdash;

        <div className="exp-item">
          <div className="job">
            <a className="company strike" href={desc.link} target="_blank">
              {desc.name}
            </a>
            <div className="duration">
              {ConvertDate(desc.startDate)}
              {desc.status === "Project" &&
                desc.end &&
                ` ~ ${ConvertDate(desc.end)}`}
              {desc.status === "Work" &&
                (desc.end ? ` ~ ${ConvertDate(desc.end)}` : " ~ Present")}
            </div>
          </div>
          <div className="title">{desc.role}</div>
          <div className="description">
            <p>{desc.description}</p>
            {CreateTags(desc.technologies, index)}
          </div>
        </div>
      );
    });

    DisplayAllExperiences.push(
      <div className="experience">
        <h4>{status}</h4>
        <div className="content">{processed}</div>
      </div>
    );
    count += 1;
  }

  return <div>{DisplayAllExperiences}</div>;
}

export default Experience;
