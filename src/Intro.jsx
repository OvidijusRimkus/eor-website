import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Intro.css";
import "./index.css";

const Intro = ({ cartCount, setCartCount }) => {
  const [startTransition, setStartTransition] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTransition(true);

      // laukiam kol animacija baigsis (pvz. 1s, priklauso nuo CSS trukmės)
      setTimeout(() => {
        setHideIntro(true);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {/* Intro animacija – tik kol jos reikia */}
      {!hideIntro && (
        <div className={`intro ${startTransition ? "slide-up" : ""}`}>
          <div className="intro-content">
            <div className="intro-logo">EoR</div>
            <h1 className="intro-text">One word. Every phone. Every style.</h1>
          </div>
        </div>
      )}

      {/* Juoda juosta su šūkiu */}
      <div className="main">
        <div className="logo">EoR</div>
        <div className="marquee">
          <div className="marquee-content">
            One word. Every phone. Every style.
          </div>
        </div>
      </div>

      {/* Header su krepšelio skaičiumi */}
      <Header cartCount={cartCount} setCartCount={setCartCount} />
    </div>
  );
};

export default Intro;
