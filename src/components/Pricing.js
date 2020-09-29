import React from 'react'
import {Link} from 'react-router-dom'
import './Pricing.css'
import PricingCard from './PricingCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Pricing() {
    return (
    <>
      <div className="pricing" >
      <PricingCard bundle="single" number="1" title="Trening personalny" price="100 PLN"/>
      <PricingCard bundle="pakiet" number="5 + 1" title="Trening personalny" price="450 PLN"/>
      <PricingCard bundle="pakiet" number="10" title="Treningów personalnych" price="800 PLN"/>
      </div>     
    </>
    )
}

export default Pricing