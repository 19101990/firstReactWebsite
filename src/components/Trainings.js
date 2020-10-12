import React from "react";
import { Link } from "react-router-dom";
import "./Trainings.css";
import TrainingCard from "./TrainingCard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Trainings() {
  return (
    <>
      <div id="trainings" className="trainings_title">
        <div>Treningi</div>
      </div>
      <div className="trainings">
        <TrainingCard
          title="Trening na siłowni"
          text="Swoim klientom proponuje treningi na siłowni z wykorzystaniem dostępnych sprzętów. Obiekt sportowy do uzgodnienia."
          classes="trainingcard-content gym-img"
        />
        <TrainingCard
          title="Trening w plenerze"
          text="Swoim klientom proponuje treningi w plenerze - na siłowniach zewnętrznych, w parkach i innych otwartych przestrzeniach."
          classes="trainingcard-content outdoor-img"
        />
        <TrainingCard
          title="Trening w domu"
          text="Swoim klientom proponuje treningi w domu z wykorzystaniem podstawowego sprzętu (gumy oporowe, piłka fitness etc.)"
          classes="trainingcard-content home-img"
        />
      </div>
      <div className="trainings">
        <TrainingCard
          title="Trening w parach"
          text="Niekiedy łatwiej zmotywować się we dwoje, dlatego swoim klientom proponuje treningi w parach. Trening może odbyć się na siłowni, w plenerze lub u klienta."
          classes="trainingcard-content-bottom pair-img"
        />
        <TrainingCard
          title="Trening i masaż w biurze"
          text="Praca biurowa znacząco obciąża nasz kręgosłup, dlatego swoim klientom proponuję masaż oraz trening w biurze."
          classes="trainingcard-content-bottom office-img"
        />
      </div>
    </>
  );
}

export default Trainings;
