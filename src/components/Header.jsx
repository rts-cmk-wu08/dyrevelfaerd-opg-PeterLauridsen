import React from "react";
import "./Header.css";

const Header = () => {
  const handleSmoothScroll = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="nav">
      <span className="d-flex center">
        <img src="logo.png" className="herotextPic" alt="frontlogo" />
        <a className="herotext navText">Foreningen for Dyrevelfærd</a>
      </span>

      <nav className="d-flex center">
        <a onClick={() => handleSmoothScroll("home")} className="navText">
          Hjem
        </a>
        <a onClick={() => handleSmoothScroll("about")} className="navText">
          Om os
        </a>
        <a onClick={() => handleSmoothScroll("volunteer")} className="navText">
          Bliv Frivillig
        </a>
        <a
          onClick={() => handleSmoothScroll("animals-in-need")}
          className="navText"
        >
          Dyr i nød?
        </a>
        <a onClick={() => handleSmoothScroll("newsletter")} className="navText">
          Nyhedsbrev
        </a>
        <a onClick={() => handleSmoothScroll("adopt")} className="navText">
          Adopter et dyr
        </a>
      </nav>
    </header>
  );
};

export default Header;
