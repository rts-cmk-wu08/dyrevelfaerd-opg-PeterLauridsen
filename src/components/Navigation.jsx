import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navigation.css";

const Navgation = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default Navgation;
