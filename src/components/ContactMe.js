import React from 'react'
import {Link} from 'react-router-dom'
import './ContactMe.css'
import ContactMeCard from './ContactMeCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactMe() {
    return (
    <>
      <div id="contact" className="contact_title"><div>Skontaktuj się ze mną</div></div>

      <div className="contact_content">
        <ContactMeCard icon=<FontAwesomeIcon icon="paper-plane" /> title="igorkielbowski@gmail.com" description="Napisz"/>
        <ContactMeCard icon=<FontAwesomeIcon icon="mobile-alt" /> title="+48 505 253 169" description="Zadzwoń" />
        <ContactMeCard icon=<FontAwesomeIcon icon="map-marker-alt" /> title="Szczecin, zachodniopomorskie" description="Lokalizacja" />        
      </div>  
    </>
    )
}

export default ContactMe