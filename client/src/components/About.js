import React from 'react'

function About(props) {
    let types = []

    for (let skill of props.skills){
        if (types.indexOf(skill.type) === -1){
            types.push(skill.type)
        }
    }

    let DisplayAllSkills = []
    let count = 0
    for (let type of types){
        let filtered = props.skills.filter ( item => item.type === type )
        const processed = filtered.map((skill, index) => {
            return( 
                <span id="skill" key={index}> 
                    {skill.name} -
                </span> )})
        DisplayAllSkills.push(
            <div key={count}>
                <b>{type}</b> : {processed}
            </div>
        )
        count += 1
    }

    return(
        <div>
            <div id="title">About</div>
                <div className="content">
                    <p>I am a second year studying biomedical engineering at the University of Waterloo.</p>
                    <p>I enjoy building things for the web and am equipped with an eagerness to learn. 
                    A few of my interests include web and app development, and data processing. 
                    I'm passionate about sustainability and love traveling (I've lived in nine different countries and visited countless more)!</p>
                    <p>I'm currently looking for an internship / co-op opportunity for the winter (Jan - Apr 2021).</p>
                </div>

            <div id="title">Skills</div>
                <div className="content">
                    {DisplayAllSkills}
                </div>
        </div>

        
    )
}

export default About