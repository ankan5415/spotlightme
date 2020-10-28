import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThemeChange(props) {
  let isDark = props.isDark;
  return (
    <button
      value={props.isDark}
      onClick={props.ChangeTheme}
      className={`theme-icon ${isDark ? "open" : ""}`}
    >
      <FontAwesomeIcon icon={["fas", "adjust"]} className='fa change-theme' />
    </button>
  );
}
