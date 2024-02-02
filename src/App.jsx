import React from "react";
import "./App.css"
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import ContactMe from "./components/ContactMe/ContactMe";

const App = () => {
  return (
      <>
        <Navbar/>
          <div className="container">
              <Hero/>
              <Skills/>
              <Education/>
              <ContactMe/>
          </div>
      </>
  )
}

export default App;