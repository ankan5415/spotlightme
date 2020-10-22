import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const generateSocials = (data) => {
  data = data.filter((data) => data.isIcon);

  return data.map((item) => {
    return (
      <a href={item.name} target="_blank">
        <FontAwesomeIcon icon={item.icon} className="fa" />
      </a>
    );
  });
};

const generateButtons = (data) => {
  data = data.filter((data) => !data.isIcon);
  return data.map((item) => {
    return (
      <span className="resume-box">
        <a href={item.name} target="_blank">
          <span className="resume-link strike">{item.displayMethod}</span>
        </a>
      </span>
    );
  });
};

function SplitLeft(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let temp =
      props &&
      props.info.filter(
        (data) =>
          data.display &&
          data.hasOwnProperty("displayMethod") &&
          data.displayMethod.length > 0
      );
    temp.map((data) => {
      data.icon = data.displayMethod.split(", ");
    });

    console.log(temp);
    setData(temp);
  }, [props]);

  return (
    <div className="left">
      <div className="bg-img"></div>
      <div className="left-inner">
        <div className="info">
          <h2 className="name">Hey, I'm Abhinav</h2>
          <div className="subtext">I love building things and writing code</div>
          <div className="jobStatus">
            Software Engineering at University of Waterloo
          </div>
          <div className="social-links">{generateSocials(data)}</div>
          <div className="social-links">{generateButtons(data)}</div>
        </div>
      </div>
    </div>
  );
}

export default SplitLeft;
