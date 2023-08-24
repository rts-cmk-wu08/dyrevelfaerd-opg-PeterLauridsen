import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="nav">
        <span className="d-flex center">
          <img src="logo.png" className="herotextPic" alt="frontlogo" />
          <a className="herotext navText">Foreningen for Dyrevelfærd</a>
        </span>

        <nav className="d-flex center">
          <Link to="/" className="navText">Hjem</Link>
          <Link to="#" className="navText" >Om os</Link>
          <Link to="#" className="navText">Bliv Frivillig</Link>
          <Link to="#" className="navText">Dyr i nød?</Link>
          <Link to="#" className="navText">Adopter et dyr</Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
