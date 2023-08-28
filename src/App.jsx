import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AnimalDetail from "./pages/AnimalDetail";
import ThankYou from "./pages/ThankYou";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animalDetail" element={<AnimalDetail />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/AnimalDetail/:id" element={<AnimalDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
