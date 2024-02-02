import React from "react";
import "./App.css"
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";

const App = () => {
  return (
      <>
        <Navbar/>
          <div className="container">
              <Hero/>
              <Skills/>
              <Education/>
          </div>
      </>
  )
}

export default App;