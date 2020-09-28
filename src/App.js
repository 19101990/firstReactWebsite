import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Offer from './components/Offer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

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
      
    </>
  );
}

export default App;
