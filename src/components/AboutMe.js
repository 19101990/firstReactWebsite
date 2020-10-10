import React from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

function AboutMe() {
  return (
    <>
      <div id="about" className="aboutme_title">
        <div>O mnie</div>
      </div>
      <div className="aboutme-content">
        <div className="aboutme-content_picture"></div>
        <div className="aboutme-content_text">
          <h1>Dlaczego warto trenować ze mną?</h1>
          <p>
            Jestem doświadczonym trenerem personalnym z bardzo dużą wiedzą w
            dziedzinie fizjoterapii zdobytą na studiach oraz dodatkowych
            kursach. Swoim podopiecznym oferuję profesjonalną i kompleksową
            opiekę.
          </p>
          <ul>
            <li>Lorem ipsum sit dolor</li>
            <li>Lorem ipsum sit dolor</li>
            <li>Lorem ipsum sit dolor</li>
            <li>Lorem ipsum sit dolor</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
