import React from "react";
import './App.scss'
import {About,Footer,Header,Skill,Testimonial,Work} from "./container/index.js";
import { Navbar } from "./components/index";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skill />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
