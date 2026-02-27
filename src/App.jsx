import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import ScrollToTop from "./Component/ScrollToTop";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
          <ScrollToTop/>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default App;