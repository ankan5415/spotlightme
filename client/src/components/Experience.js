import React from "react";

const ConvertDate = (DateString) => {
  const res = new Date(DateString);
  return res.toLocaleString("en-us", { month: "short", year: "numeric" });
};

const CreateTags = (technologies, index) => {
  const tech = technologies ? technologies.split(", ") : [];

  return tech.map((elt) => {
    return (
      <span className="technology" key={index}>
        {elt}
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
        <div className="item2">
          <div className="exp-item">
            <div className="job">
              <a className="company strike" href={desc.link} target="_blank">
                {desc.name}
              </a>
              {desc.status === "Education" && (
                <div className="title">{desc.role}</div>
              )}

              <div className="duration">
                {ConvertDate(desc.startDate)}
                {desc.status === "Project" &&
                  desc.end &&
                  ` ~ ${ConvertDate(desc.end)}`}
                {desc.status === "Work" &&
                  (desc.end ? ` ~ ${ConvertDate(desc.end)}` : " ~ Present")}
              </div>
            </div>
            <div className="description">
              <p>{desc.description}</p>
              {CreateTags(desc.technologies, index)}
            </div>
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
