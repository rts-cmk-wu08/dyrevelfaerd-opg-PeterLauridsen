import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Import your other components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navgation from "./components/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navgation />}>
        <Route index component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Route>
    </Routes>
  );
};

export default App;
