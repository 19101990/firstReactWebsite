import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero" id="topPage">
        <div className="hero_txt">
          <h1>Witaj na mojej stronie!</h1>
          <p>
            Jestem doświadczonym trenerem personalnym z wiedzą z dziedziny
            fizjoterapii zdobytą na studiach oraz dodatkowych kursach. Swoim
            podopiecznym oferuję profesjonalną i kompleksową opiekę. Zachęcam do
            zapoznania się z moją ofertą.
          </p>
          {/* <button>Oferta</button> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
