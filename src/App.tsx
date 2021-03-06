import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import CarouselPics from "./components/CarouselPics";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1 className="title">Inspiirae</h1>
      </header>
      <main>
        <div>
          <CarouselPics />
        </div>
        </main>
      <Footer />
    </div>
  );
}

export default App;
