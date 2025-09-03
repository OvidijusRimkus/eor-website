import React, { useState } from "react";
import Intro from "./Intro";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return <Intro cartCount={cartCount} setCartCount={setCartCount} />;
};

export default App;
