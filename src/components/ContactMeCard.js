import React from "react";
import "./ContactMeCard.css";

function ContactMeCard(props) {
  return (
    <>
      <div className="contactmecard_content">
        <div className="contactmecard_content-wrap">
          <div className="contactmecard_content-icon">
            <span>{props.icon}</span>
          </div>
          <div className="contactmecard_content-title">
            <h3>{props.title}</h3>
          </div>
        </div>
        <div className="contactmecard_content-txt">
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default ContactMeCard;
