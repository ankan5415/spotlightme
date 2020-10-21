import React from "react";

const ConvertDate = (DateString) => {
  const res = new Date(DateString);
  return res.toLocaleString("en-us", { month: "short", year: "numeric" });
};

const CreateTags = (technologies, index) => {
  const tech = technologies ? technologies.split(", ") : [];

  return tech.map((elt) => {
    return (
      <span className='technology' key={index}>
        {elt}
      </span>
    );
  });
};

const GenerateStatuses = (props) => {
  let statuses = [];
  let count = 0;
  let DisplayAllExperiences = [];

  const GenerateDIVs = (filtered) => {
    return filtered.map((desc, index) => {
      return (
        <div className='item2' key={index}>
          <div className='exp-item' key={desc.name}>
            <div className='job' key={`1${index}1`}>
              <a className='company strike' href={desc.link} target='_blank'>
                {desc.name}
              </a>

              {desc.status === "Education" && (
                <div
                  className='title'
                  key={desc.role ? desc.role : `${index}norole`}
                >
                  {desc.role}
                </div>
              )}

              <div className='duration' key={`${index}${desc.startDate}`}>
                {ConvertDate(desc.startDate)}
                {desc.status === "Project" &&
                  desc.end &&
                  ` ~ ${ConvertDate(desc.end)}`}
                {desc.status === "Work" &&
                  (desc.end ? ` ~ ${ConvertDate(desc.end)}` : " ~ Present")}
              </div>
            </div>
            <div
              className='description'
              key={
                desc.description
                  ? desc.description.slice(0, 5)
                  : `nodescription${index}`
              }
            >
              <p>{desc.description}</p>
              {CreateTags(desc.technologies, index)}
            </div>
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

    DisplayAllExperiences.push(
      <div className='experience'>
        <h4>{status}</h4>
        <div className='content'>{processed}</div>
      </div>
    );
    count += 1;
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
