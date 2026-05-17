import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Home from "./assets/pages/Home";
import Employers from "./assets/pages/Employers";
import Services from "./assets/pages/Services";
import Contacts from "./assets/pages/Contact";
import "./assets/scss/style.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Employers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;