import React from 'react'
import {Link} from 'react-router-dom'
import './TrainingCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TrainingCard(props) {
    return (
    <>
      <div className="trainingcard_content">
        <div className="trainingcard_content-icon" >
            <span>{props.icon}</span>
        </div>
        <div className="trainingcard_content-title" >
            <h2>{props.title}</h2>
        </div>
        <div className="trainingcard_content-txt" >
            <p>{props.text}
            </p>
        </div>
      </div>     
    </>
    )
}

export default TrainingCard