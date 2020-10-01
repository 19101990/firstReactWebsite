import React from 'react'
import {Link} from 'react-router-dom'
import './Trainings.css'
import TrainingCard from './TrainingCard.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Trainings() {
    return (
    <>
      <div id="trainings" className="trainings_title"><div>Treningi</div></div>
      <div className="trainings" >
          <TrainingCard title="Trening na siłowni" text="Swoim klientom proponuje treningi na siłowni. Curabitur eu rhoncus quam. Integer volutpat dictum dolor vel lobortis. Praesent pharetra nunc eget sapien elementum euismod. Aenean ac euismod turpis." classes="trainingcard-content gym-img"/>
          <TrainingCard title="Trening w plenerze" text="Swoim klientom proponuje treningi w plenerze. Curabitur eu rhoncus quam. Integer volutpat dictum dolor vel lobortis. Praesent pharetra nunc eget sapien elementum euismod. Aenean ac euismod turpis." classes="trainingcard-content outdoor-img"/>
          <TrainingCard title="Trening w domu" text="Swoim klientom proponuje treningi w domu. Curabitur eu rhoncus quam. Integer volutpat dictum dolor vel lobortis. Praesent pharetra nunc eget sapien elementum euismod. Aenean ac euismod turpis." classes="trainingcard-content home-img"/>
          </div>
          <div className="trainings" >
          <TrainingCard title="Trening w parach" text="Swoim klientom proponuje treningi w parach. Curabitur eu rhoncus quam. Integer volutpat dictum dolor vel lobortis. Praesent pharetra nunc eget sapien elementum euismod. Aenean ac euismod turpis." classes="trainingcard-content-bottom pair-img"/>
          <TrainingCard title="Trening w biurze" text="Swoim klientom proponuje treningi w biurze. Curabitur eu rhoncus quam. Integer volutpat dictum dolor vel lobortis. Praesent pharetra nunc eget sapien elementum euismod. Aenean ac euismod turpis." classes="trainingcard-content-bottom office-img"/>
      </div>     
    </>
    )
}

export default Trainings