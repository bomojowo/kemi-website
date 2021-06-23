import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1 className="title">Inspiirae</h1>
      </header>
      <main>Picture</main>
      <footer>links to socials</footer>
    </div>
  );
}

export default App;
