import React from "react";

function About(props) {
  let data = {};

  const skills = props.skills.filter(
    (item) => !item.hasOwnProperty("displayMethod") && item.display
  );

  skills.forEach((skill) => {
    if (!data.hasOwnProperty(skill.type)) {
      data[skill.type] = [skill.name];
    } else {
      data[skill.type].push(skill.name);
    }
  });

  const DisplayAllSkills = Object.entries(data).map(
    ([key, value], skillIndex) => {
      const domainSkills = value.map((skill, index) => {
        return (
          <span id="skill" key={index} className="skill">
            <b>&#8226;</b> {skill}
          </span>
        );
      });
      return (
        <div className="skill-category" key={skillIndex}>
          <strong>{key} &nbsp;</strong>
          <span>{domainSkills}</span>
        </div>
      );
    }
  );

  return (
    <div className="introduction">
      <h4>Intro</h4>
      <div className="content">
        <p className="intro-p">
          I am a creator who loves to tinker and build. Whether my projects are
          hardware or software implementations, I am passionate about applying
          my knowledge to create working products and bring about positive
          societal change.
        </p>
        <div className="content">{DisplayAllSkills}</div>
      </div>
    </div>
  );
}

export default About;
