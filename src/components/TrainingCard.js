import React from "react";
import "./TrainingCard.css";

function TrainingCard(props) {
  return (
    <>
      <div className={props.classes}>
        <div className="trainingcard_content-title">
          <h2>{props.title}</h2>
        </div>
        <div className="trainingcard_content-txt">
          <p>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default TrainingCard;
