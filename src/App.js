import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import Jobs from "./components/Jobs/Jobs";
import Work from "./Work/work";
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Testimonial />
      <Jobs />
      <Work />
      <ScrollToTop smooth />
    </>
  );
}

export default App;