import React from 'react'
import {Link} from 'react-router-dom'
import './OfferCard.css'

function OfferCard(props) {
    return (
    <>
      <div className="offercard_content">
        <div className="offercard_content-icon" >
            <span>{props.icon}</span>
        </div>
        <div className="offercard_content-title" >
            <h1>{props.title}</h1>
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