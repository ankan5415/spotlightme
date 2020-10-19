import React, { useState, useEffect } from "react";
import SplitLeft from "./components/SplitLeft";
import SplitRight from "./components/SplitRight";
import axios from "axios";
export default function App() {
  // Gather JSON Data

  const [data, setData] = useState({ about: [], experiences: [] });

  useEffect(() => {
    let fetchData = async () => {
      let res = await axios.get(
        "https://8evv535w4k.execute-api.us-east-1.amazonaws.com/dev"
      );
      console.log(res.data);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <SplitLeft />

      <SplitRight info={data} />
    </div>
  );
}
