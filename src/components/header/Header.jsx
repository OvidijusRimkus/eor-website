import React from "react";
import Breadcrumb from "./Breadcrumb";
import "./Breadcrumb.css"; // ← pataisyta import sintaksė
import "./Header.css";

const Header = ({ cartCount }) => {
  return (
    <>
      <header className="header">
        <nav className="nav-left">
          <div className="nav-item">
            <span>Cases by Phone</span>
            <div className="dropdown">
              <a href="#">iPhone</a>
              <a href="#">Samsung</a>
              <a href="#">Xiaomi</a>
              <a href="#">Google Pixel</a>
              <a href="#">OnePlus</a>
            </div>
          </div>

          <div className="nav-item">
            <span>Collections</span>
            <div className="dropdown">
              <a href="#">Rainbow Room</a>
              <a href="#">Street Beat</a>
              <a href="#">Zen Space</a>
              <a href="#">Sugar & Shine</a>
              <a href="#">Dark Chamber</a>
              <a href="#">Boho Vibes</a>
            </div>
          </div>

          <a href="#">Styles</a>
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

      {/* Breadcrumb navigacija – rodom po header */}
      <Breadcrumb />
    </>
  );
};

export default Header;