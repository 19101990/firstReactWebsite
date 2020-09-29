import React from 'react'
import {Link} from 'react-router-dom'
import './OfferCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OfferCard(props) {
    return (
    <>
      <div className="offercard_content">
        <div className="offercard_content-icon" >
            <span>{props.icon}</span>
        </div>
        <div className="offercard_content-title" >
            <h2>{props.title}</h2>
        </div>
        <div className="offercard_content-txt" >
            <p>{props.text}
            </p>
        </div>
      </div>     
    </>
    )
}

export default OfferCard