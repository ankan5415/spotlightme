import React from "react";
import ShowMore from "./ShowMore";

const convertData = (DateString) => {
  const res = new Date(DateString);
  return res.toLocaleString("en-us", { month: "short", year: "numeric" });
};

const createTags = (technologies, index) => {
  const tech = technologies ? technologies.split(", ") : [];

  return tech.map((elt) => {
    return (
      <span className="technology" key={index}>
        {elt}
      </span>
    );
  });
};

const GenerateStatuses = (props) => {
  let statuses = [];
  let DisplayAllExperiences = [];

  const GenerateDIVs = (filtered) => {
    return filtered.map((desc, index) => {
      return (
        <div className="exp-item" key={desc.name}>
          <div className="job">
            <a className="company strike" href={desc.link} target="_blank">
              {desc.name}
            </a>

            {desc.status === "Education" && (
              <div
                className="title"
                key={desc.role ? desc.role : `${index}norole`}
              >
                {desc.role}
              </div>
            )}

            <div className="duration" key={`${index}${desc.startDate}`}>
              {convertData(desc.startDate)}
              {desc.status === "Project" &&
                desc.end &&
                ` ~ ${convertData(desc.end)}`}
              {desc.status === "Work" &&
                (desc.end ? ` ~ ${convertData(desc.end)}` : " ~ Present")}
            </div>
          </div>
          <div
            className="description"
            key={
              desc.description
                ? desc.description.slice(0, 5)
                : `nodescription${index}`
            }
          >
            <p>{desc.description}</p>
            {createTags(desc.technologies, index)}
          </div>
        </div>
      );
    });
  };

  for (let experience of props.experiences) {
    if (statuses.indexOf(experience.status) === -1) {
      statuses.push(experience.status);
    }
  }

  for (let status of statuses) {
    let filtered = props.experiences.filter(
      (item) => item.status === status && item.display
    );

    let processed = GenerateDIVs(filtered);
    const [isClicked, handleChange] = ShowMore();

    DisplayAllExperiences.push(
      <a value={isClicked} onClick={handleChange}>
        <div className="experience">
          <div className={(!isClicked || filtered.length <= 2) && "clip-item"}>
            <h4>{status}</h4>
            <div className="content">{processed}</div>
          </div>
        </div>
      </a>
    );
  }

  return DisplayAllExperiences;
};

function Experience(props) {
  return (
    <div>
      <GenerateStatuses experiences={props.experiences} />
    </div>
  );
}

export default Experience;
