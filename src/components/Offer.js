import React from 'react'
import {Link} from 'react-router-dom'
import './Offer.css'
import OfferCard from'./OfferCard.js'

function Offer() {
    return (
    <>
      <div className="offer" >
        <OfferCard icon="#" title="Trening personalny" text="Lorem ipsum ipsum ipsum lorem dolo sit amet ipsum ipsum lorem dolo sit amet."/>
        <OfferCard icon="#" title="Masaż" text="Lorem ipsum ipsum ipsum lorem dolo sit amet ipsum ipsum lorem dolo sit amet."/>
        <OfferCard icon="#" title="Konsultacje online" text="Lorem ipsum ipsum ipsum lorem dolo sit amet ipsum ipsum lorem dolo sit amet." className="offercard_content--last" />
      </div>     
    </>
    )
}

export default Offer