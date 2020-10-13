import React from "react";
import "./AboutMe.css";
import "./Navbar.css";

function AboutMe() {
  return (
    <>
      <div id="about" className="aboutme_title">
        <div>O mnie</div>
      </div>
      <div className="aboutme-content">
        <div className="aboutme-content_picture"></div>
        <div className="aboutme-content_picture-md"></div>
        <div className="aboutme-content_text">
          <h1>Dlaczego warto trenować ze mną?</h1>
          <p>
            Jestem doświadczonym trenerem personalnym z wiedzą w dziedzinie
            fizjoterapii zdobytą na studiach oraz dodatkowych kursach. Swoim
            podopiecznym oferuję profesjonalną i kompleksową opiekę, a treningi
            dobieram indywidualnie do potrzeb każdego klienta. Pomagam:
          </p>
          <ul>
            <li>zrzucić nadmiar kilogramów,</li>
            <li>zbudować masę mięśniową i wymarzoną sylwetkę,</li>
            <li>skorygować wady postawy.</li>
          </ul>
          <p>
            Moja praca to moja pasja, a na treningach podopiecznym staram się
            przekazywać całą swoją wiedzę.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
