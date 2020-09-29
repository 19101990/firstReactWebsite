import React from 'react'
import {Link} from 'react-router-dom'
import './Offer.css'
import OfferCard from'./OfferCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Offer() {
    return (
    <>
      <div className="offer_title"><div>Oferta</div></div>
      <div className="offer" >
        <OfferCard icon=<FontAwesomeIcon icon="coffee" /> title="Trening personalny" text="Lorem ipsum ipsum ipsum lorem dolo sit amet ipsum ipsum lorem dolo sit amet."/>
        <OfferCard icon="#" title="Masaż" text="Lorem ipsum ipsum ipsum lorem dolo sit amet ipsum ipsum lorem dolo sit amet." className="offercard_content--middle"/>
        <OfferCard icon="#" title="Konsultacje online" text="Lorem ipsum ipsum ipsum lorem dolo sit amet ipsum ipsum lorem dolo sit amet." className="offercard_content--last" />
      </div>     
    </>
    )
}

export default Offer