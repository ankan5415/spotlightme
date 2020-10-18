import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SplitLeft () {

    return(
        <div className="split left bg-img">
            <div className="centered" >
                <h1>Abhinav Boyed</h1>
                <p>University of Waterloo</p>
                <div className="btn-group">
                    <a id="btn" href="https://www.linkedin.com/in/abhinav-boyed/" target="_blank">
                        <FontAwesomeIcon icon={['fab', 'linkedin']}/>
                    </a>

                    <a id="btn" href="https://github.com/abhi5415" target="_blank"> 
                        <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                    <a id="btn" href="mailto:aboyed@uwaterloo.ca" target="_blank">
                        <FontAwesomeIcon icon={["fas", "envelope"]} />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default SplitLeft