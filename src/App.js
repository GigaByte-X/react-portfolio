import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import Work from "./components/work/Work";
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Testimonial />
      <Work />
      <ScrollToTop smooth />
    </>
  );
}

export default App;