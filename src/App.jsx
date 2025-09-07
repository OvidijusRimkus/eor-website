// app.jsx
import React, { useState } from "react";
import Intro from "./Intro";
import Sections from "./Sections";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Intro cartCount={cartCount} setCartCount={setCartCount} />
      <Sections />
    </>
  );
};

export default App;