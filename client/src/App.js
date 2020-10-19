import React from 'react'
import SplitLeft from "./components/SplitLeft"
import SplitRight from './components/SplitRight'
import info from './sample.js'
export default function App () {

  // Gather JSON Data
  // const info = await axios.get("https://8evv535w4k.execute-api.us-east-1.amazonaws.com/dev")
  console.log(info)

	return(
		<div>

		<SplitLeft/>

    <SplitRight info={info}/>
				</div>

	)
}