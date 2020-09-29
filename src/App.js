import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Offer from './components/Offer'
import Pricing from './components/Pricing'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

// import fontawesome globally
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

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
    </>
  );
}

export default App;
