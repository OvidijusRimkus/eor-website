import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-left">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
      </nav>

      <div className="logo-center">EoR</div>

      <div className="search-right">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
