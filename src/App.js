import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Promotions from "./pages/Promotions";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <div className="App content">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" exact element={<Store />} />
            <Route path="/promotions" exact element={<Promotions />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
          <footer>Easy Growing Copyright 2014</footer>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
