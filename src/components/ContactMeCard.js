import React from 'react'
import {Link} from 'react-router-dom'
import './ContactMeCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactMeCard(props) {
    return (
    <>
      <div className="contactmecard_content">
        <div className="contactmecard_content-wrap">
            <div className="contactmecard_content-icon" >
                <span>{props.icon}</span>
            </div>
            <div className="contactmecard_content-title" >
                <h3>{props.title}</h3>
            </div>
        </div>
        <div className="contactmecard_content-txt" >
            <p>{props.description}
            </p>
        </div>
      </div>     
    </>
    )
}

export default ContactMeCard