import React from 'react'
import About from "./About.js"
import Experience from "./Experience.js"

function SplitRight(props) {
	console.log(props.info.skills)
	return(
		<div className="split right">
		<div className="inner">

			<About skills={props.info.skills}/>
			<Experience experiences={props.info.experiences}/>

			</div>
		</div>
	)
}

export default SplitRight