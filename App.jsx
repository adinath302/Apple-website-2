import React from "react";
import "./App.css";
import Navbar from "../../apple-clone/src/Component/Navbar";
import Hero from "../../apple-clone/src/Component/Hero";
import Highlights from "../../apple-clone/src/Component/Highlights";
import "./index.css";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
};

export default App;
