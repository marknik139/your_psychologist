import React from "react";
import "./App.css"
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
      <>
        <Navbar/>
          <div className="container">
              <Hero/>
          </div>
      </>
  )
}

export default App;