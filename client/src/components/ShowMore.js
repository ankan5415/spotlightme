import React, { useState } from "react";

const ShowMore = (props) => {
  const [status, setClicked] = useState(false);

  const handleClick = (vars) => {
    setClicked(!status);
  };
  return [status, handleClick];
};

export default ShowMore;
