import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from './components/Footer';
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
