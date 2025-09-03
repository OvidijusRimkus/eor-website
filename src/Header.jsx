import React from "react";
import "./Header.css";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <nav className="nav-left">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About</a>
      </nav>

      <div className="logo-center">EoR</div>

      <div className="header-right">
        <div className="search-right">
          <input type="text" placeholder="Search..." />
        </div>

        <div className="cart-icon">
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
