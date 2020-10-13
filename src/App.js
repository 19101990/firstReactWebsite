import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Pricing from "./components/Pricing";
import AboutMe from "./components/AboutMe";
import Trainings from "./components/Trainings";
import ContactMe from "./components/ContactMe";
import Social from "./components/Social";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import "./App.css";

// import fontawesome globally
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
      <Hero />
      <Offer />
      <Pricing />
      <AboutMe />
      <Trainings />
      <ContactMe />
      <Social />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Rozumiem"
        cookieName="ciasteczka"
        style={{
          background: "rgb(12, 12, 12)",
          fontSize: "15px",
          textTransform: "uppercase",
          margin: "0",
          padding: "0 3em 0 3em",
          fontWeight: "200",
        }}
        buttonStyle={{
          color: "#fff",
          fontSize: "13px",
          background: "rgb(167, 0, 0)",
          textTransform: "uppercase",
          padding: "1em 2em",
        }}
        expires={150}
      >
        Strona Fizjotrener korzysta z ciasteczek. Pozostając na stronie zgadzasz
        się na ich użycie.{" "}
        {/* <span style={{ fontSize: "10px" }}>Small text</span> */}
      </CookieConsent>
    </>
  );
}

export default App;
