import React from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";
import PricingCard from "./PricingCard.js";
import List from "./List.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items1 = [
  "Lorem Ipsum",
  "Sit dolor",
  "Ame nat tor",
  "Halceta trebo Argo",
];
const items2 = [
  "Lorem Ipsum",
  "Sit dolor",
  "Ame nat tor",
  "Halceta trebo Argo",
];
const items3 = [
  "Lorem Ipsum",
  "Sit dolor",
  "Ame nat tor",
  "Halceta trebo Argo",
];
const items4 = [
  "Lorem Ipsum",
  "Sit dolor",
  "Ame nat tor",
  "Halceta trebo Argo",
];
const items5 = [
  "Lorem Ipsum",
  "Sit dolor",
  "Ame nat tor",
  "Halceta trebo Argo",
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
          number="1"
          title="Trening personalny"
          list={<List items={items1} />}
          price="100 PLN"
        />
        <PricingCard
          bundle="pakiet"
          number="5 + 1"
          title="Trening personalny"
          list={<List items={items2} />}
          price="450 PLN"
        />
        <PricingCard
          bundle="pakiet"
          number="10"
          title="Treningów personalnych"
          list={<List items={items3} />}
          price="800 PLN"
        />
      </div>
      <div className="pricing">
        <PricingCard
          bundle="single"
          number="1"
          title="Masaż"
          list={<List items={items4} />}
          price="100 PLN"
        />
        <PricingCard
          bundle="pakiet"
          number="5"
          title="Masaży"
          list={<List items={items5} />}
          price="450 PLN"
        />
      </div>
    </>
  );
}

export default Pricing;
