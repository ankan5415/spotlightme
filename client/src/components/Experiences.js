import React from "react";
import ShowMore from "./ShowMore";
import ExperienceSection from "./ExperienceSection";

function Experience(props) {
  const data = {};
  const experiences = props.experiences.filter((item) => item.display);

  experiences.forEach((experience) => {
    if (!data.hasOwnProperty(experience.status)) {
      data[experience.status] = [experience];
    } else {
      data[experience.status].push(experience);
    }
  });

  return (
    <div>
      {Object.entries(data).map(([key, value], statusIndex) => {
        const [isClicked, handleChange] = ShowMore();
        return (
          <div
            value={isClicked}
            onClick={handleChange}
            className="experience-box"
            key={statusIndex}
          >
            <div className="experience">
              <div
                className={!isClicked || value.length <= 2 ? "clip-item" : ""}
              >
                <h4>{key}</h4>
                <ExperienceSection data={value} key={key} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
