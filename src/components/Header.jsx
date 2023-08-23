import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <span className="d-flex">
          <img src="logo.png" className="herotextPic" alt="frontlogo" />
          <a className="herotext">Foreningen for Dyrevelfærd</a>
        </span>

        <nav>
          <Link to="/" className="asd">Hjem</Link>
          <Link to="#">Om os</Link>
          <Link to="#">Bliv Frivillig</Link>
          <Link to="#">Dyr i nød?</Link>
          <Link to="#">Adopter et dyr</Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
