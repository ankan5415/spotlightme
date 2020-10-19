
import React from 'react'

const ConvertDate = (DateString) => {

        const res = new Date(DateString)
        return res.toLocaleString('en-us', {month: 'long', year: 'numeric'})    
    
}

function Experience(props) {

    console.log(props.experiences)
    


    let statuses = []

    for (let experience of props.experiences){
        if (statuses.indexOf(experience.status) === -1){
            statuses.push(experience.status)
        }
    }

    let count = 0
    let DisplayAllExperiences = []
    for (let status of statuses) {

        let filtered = props.experiences.filter ( item => item.status === status )

        let processed = filtered.map((desc, index) => {
            return( 
                <div key={index}>
                    <h3>
                        {desc.name} 
                        <span className="role">{desc.role}</span> 
                        <div className="time"> {desc.location} </div>
                    </h3>
                    <p>
                        {desc.description} - {desc.technologies} - {ConvertDate(desc.startDate)} {desc.end && `to ${ConvertDate(desc.end)}`}
                    </p>
                </div>
            )
        }
        )

        DisplayAllExperiences.push((
            <div key={count}>
                <div id="title">{status}</div>
                <div className="content">
                        {processed}
                </div>
            </div>
            ))
        count += 1
    } 
    
    return (
        <div>
                {DisplayAllExperiences}
        </div>
    )
    
}

export default Experience