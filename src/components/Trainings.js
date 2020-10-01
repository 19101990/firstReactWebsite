import React from 'react'
import {Link} from 'react-router-dom'
import './Trainings.css'
import TrainingCard from './TrainingCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Offer() {
    return (
    <>
      <div id="trainings" className="trainings_title"><div>Oferta</div></div>
      <div className="training" >
        <TrainingCard icon=<FontAwesomeIcon icon="dumbbell" /> title="Trening personalny" text="Lorem ipsum ipsum ipsum lorem dolo sit amet ipsum ipsum lorem dolo sit amet."/>
        <TrainingCard icon=<FontAwesomeIcon icon="hand-holding-water" /> title="Masaż" text="Lorem ipsum ipsum ipsum lorem dolo sit amet ipsum ipsum lorem dolo sit amet." className="offercard_content--middle"/>
        <TrainingCard icon=<FontAwesomeIcon icon="laptop" /> title="Konsultacje online" text="Lorem ipsum ipsum ipsum lorem dolo sit amet ipsum ipsum lorem dolo sit amet." className="offercard_content--last" />
      </div>     
    </>
    )
}

export default Offer