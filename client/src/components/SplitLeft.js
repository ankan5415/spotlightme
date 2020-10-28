import React, { useEffect, useState } from "react";
import ThemeChange from "./ChangeTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const generateSocials = (data) => {
  data = data.filter((data) => data.isIcon);

  return data.map((item, index) => {
    return (
      <a href={item.name} key={index}>
        <FontAwesomeIcon icon={item.icon} className='fa' />
      </a>
    );
  });
};

const generateButtons = (data) => {
  data = data.filter((data) => !data.isIcon);
  return data.map((item, index) => {
    return (
      <span className='resume-box' key={index}>
        <a href={item.name}>
          <span className='resume-link strike'>{item.displayMethod}</span>
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
      return null;
    });

    setData(temp);
  }, [props]);

  let isDark = props.isDark;
  return (
    <div className={`left ${isDark ? "dark-mode" : "light-mode"}`}>
      <div className='bg-img'></div>
      <div className='left-inner'>
        <div className='info'>
          <h2 className='name'>Hey, I'm Ankur!</h2>
          <div className='subtext'>I love learning and creating new things</div>
          <div className='jobStatus'>
            IB MYP Student at Glenforest Secondary School
          </div>
          <div className='social-links'>{generateSocials(data)}</div>
          <div className='social-links'>{generateButtons(data)}</div>
          <ThemeChange isDark={props.isDark} ChangeTheme={props.ChangeTheme} />
        </div>
      </div>
    </div>
  );
}

export default SplitLeft;
