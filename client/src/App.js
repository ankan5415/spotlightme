import React, { useState, useEffect } from "react";
import SplitLeft from "./components/SplitLeft";
import SplitRight from "./components/SplitRight";
// import Data from "./Data";

import axios from "axios";
export default function App() {
  const [data, setData] = useState({ about: [], experiences: [] });

  useEffect(() => {
    let fetchData = async () => {
      let res = await axios.get(
        "https://8evv535w4k.execute-api.us-east-1.amazonaws.com/dev"
      );
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="app">
      <SplitLeft info={data.about} />
      <SplitRight info={data} />
    </div>
  );
}
