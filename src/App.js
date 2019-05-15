import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import Store from './pages/Store';
import Promotions from './pages/Promotions';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div className="App content">
        <Router>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/Easy-Growin/build/" exact component={Home} />
            <Route path="/store" exact component={Store} />
            <Route path="/promotions" exact component={Promotions} />
            <Route path="/contact" exact component={Contact} />
        </Router>
      </div>
    );
  }
}

export default App;
