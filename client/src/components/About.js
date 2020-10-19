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
    let filtered = props.skills.filter((item) => item.type === type);
    const processed = filtered.map((skill, index) => {
      return (
        <span id="skill" key={index}>
          {skill.name} -
        </span>
      );
    });
    DisplayAllSkills.push(
      <div key={count}>
        <b>{type}</b> : {processed}
      </div>
    );
    count += 1;
  }

  return (
    <div>
      <div id="title">About</div>
      <div className="content">
        I am a creator who loves to tinker and build. Whether my projects are
        hardware or software implementations, I am passionate about applying my
        knowledge to create working products and bring about positive societal
        change.
      </div>
      <div id="title"></div>
      <div className="content">{DisplayAllSkills}</div>
    </div>
  );
}

export default About;
