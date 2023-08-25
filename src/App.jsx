import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Import your other components
import ThankYou from "./pages/ThankYou";
import Header from "./components/Header";
import AnimalDetail from "./pages/AnimalDetail";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/animalDetail" element={<AnimalDetail />} />
        <Route path="/ThankYou" element={<ThankYou />} />
      </Route>
    </Routes>
  );
};

export default App;
