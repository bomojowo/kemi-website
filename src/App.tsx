import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1 className="title">Inspiirae</h1>
      </header>
      <main>
        <div>
          Picture
        </div>
        <div>
          <Carousel />
        </div>
        </main>
      <footer>links to socials</footer>
    </div>
  );
}

export default App;
