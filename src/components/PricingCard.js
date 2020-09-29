import React from 'react'
import {Link} from 'react-router-dom'
import './PricingCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function PricingCard(props) {
    return (
    <>
      <div className="pricingcard_content">
        <div className="pricingcard_content-bundle" >
            <span>{props.bundle}</span>
        </div>
        <div className="pricingcard_content-txt" >
            <h1>{props.number}</h1>
            <h2>{props.title}</h2>
        </div>
        <div className="pricingcard_content-price" >
            <p>{props.price}</p>
        </div>
      </div>     
    </>
    )
}

export default PricingCard