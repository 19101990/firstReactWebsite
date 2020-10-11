import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import PricingCard from "./PricingCard.js";
import List from "./List.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items1 = [
  "min. 1 godzina",
  "trening funkcjonalny, siłowy, obwodowy lub medyczny",
  "trening na siłowni, w plenerze, w domu lub w biurze",
  "możliwy trening w parze",
];
const items2 = [
  "min. 1 godzina",
  "trening funkcjonalny, siłowy, obwodowy lub medyczny",
  "trening na siłowni, w plenerze, w domu lub w biurze",
  "możliwy trening w parze",
  "PIĄTY TRENING 50% TANIEJ!",
];
const items3 = [
  "min. 1 godzina",
  "trening funkcjonalny, siłowy, obwodowy lub medyczny",
  "trening na siłowni, w plenerze, w domu lub w biurze",
  "możliwy trening w parze",
  "10 TRENINGÓW W CENIE 8!",
];
const items4 = [
  "min. 45m minut mazażu",
  "masaż relaksacyjny, sportowy lub ujędrniający",
  "masaż całościowy lub częściowy",
  "możliwość dojazdu do klienta",
];
const items5 = [
  "min. 45m minut mazażu",
  "masaż relaksacyjny, sportowy lub ujędrniający",
  "masaż całościowy lub częściowy",
  "możliwość dojazdu do klienta",
  "PIĄTY MASAŻ 50% TANIEJ!",
];

function Pricing() {
  return (
    <>
      <div id="offer" className="offer_title">
        <div>Oferta</div>
      </div>
      <div className="pricing">
        <PricingCard
          bundle="single"
          number="1x"
          title="Trening personalny"
          list={<List items={items1} />}
          price="100 PLN"
        />
        <PricingCard
          bundle="pakiet"
          number="5x"
          title="Trening personalny"
          list={<List items={items2} />}
          price="450 PLN"
        />
        <PricingCard
          bundle="pakiet"
          number="10x"
          title="Trening personalny"
          list={<List items={items3} />}
          price="800 PLN"
        />
      </div>
      <div className="pricing">
        <PricingCard
          bundle="single"
          number="1x"
          title="Masaż"
          list={<List items={items4} />}
          price="100 PLN"
        />
        <PricingCard
          bundle="pakiet"
          number="5x"
          title="Masaż"
          list={<List items={items5} />}
          price="450 PLN"
        />
      </div>
    </>
  );
}

export default Pricing;
