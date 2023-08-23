import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Import your other components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
