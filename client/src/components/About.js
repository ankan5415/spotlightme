import React from "react";

function About(props) {
  let types = [];

  for (let skill of props.skills) {
    if (types.indexOf(skill.type) === -1) {
      types.push(skill.type);
    }
  }

  let DisplayAllSkills = [];
  let count = 0;
  for (let type of types) {
    let filtered = props.skills.filter(
      (item) => item.type === type && item.display
    );
    const processed = filtered.map((skill, index) => {
      return (
        <span
          id="skill"
          key={index}
          style={{
            color: "blue",
          }}
        >
          {" "}
          <b>&#8226;</b> {skill.name}
        </span>
      );
    });
    DisplayAllSkills.push(
      <div className="skill-category" key={count}>
        <strong>{type} &nbsp;</strong>
        <span>{processed}</span>
      </div>
    );
    count += 1;
  }

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
