import React, { useState, useEffect } from "react";
import SplitLeft from "./components/SplitLeft";
import SplitRight from "./components/SplitRight";
// import Data from "./Data";

import axios from "axios";
export default function App() {
  // Gather JSON Data

  const [data, setData] = useState({ about: [], experiences: [] });

  useEffect(() => {
    let fetchData = async () => {
      let res = await axios.get("https://d1isso4jxmmjd7.cloudfront.net/");
      console.log(res.data);
      setData(res.data);
    };
    fetchData();
    return null;
  }, []);

  return (
    <div className="app">
      <SplitLeft />
      <SplitRight info={data} />
    </div>
  );
}
