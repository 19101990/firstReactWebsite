import React from "react";
import "./Offer.css";
import OfferCard from "./OfferCard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Offer() {
  return (
    <>
      <div className="offer">
        <OfferCard
          icon=<FontAwesomeIcon icon="dumbbell" />
          title="Trening personalny"
          text="Indywidualnie dobrany program 
          treningowy dopasowany do potrzeb klienta."
        />
        <OfferCard
          icon=<FontAwesomeIcon icon="hand-holding-water" />
          title="Masaż"
          text="Całościowy lub częściowy 
          zabieg odprężający."
        />
        <OfferCard
          icon=<FontAwesomeIcon icon="laptop" />
          title="Konsultacje online"
          text="Wideorozmowa w celu dobrania 
          odpowiedniej strategii treningowej 
          lub rehabilitacyjnej."
        />
      </div>
    </>
  );
}

export default Offer;
