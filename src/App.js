import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Company from "./components/Company";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
//nigga what
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
    </div>
  );
}

export default App;
