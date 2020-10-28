import React, { useState, useEffect } from "react";
import SplitLeft from "./components/SplitLeft";
import SplitRight from "./components/SplitRight";
import Theme from "./components/Theme";
// import Data from "./Data";

import axios from "axios";
export default function App() {
  const [data, setData] = useState({ about: [], experiences: [] });

  useEffect(() => {
    let fetchData = async () => {
      let res = await axios.get("https://dfh1ezhmk1c4g.cloudfront.net/");
      setData(res.data);
    };
    fetchData();
  }, []);

  let [isDark, ChangeTheme] = Theme();

  return (
    <div className='app'>
      <SplitLeft info={data.about} isDark={isDark} ChangeTheme={ChangeTheme} />
      <SplitRight info={data} isDark={isDark} />
    </div>
  );
}
