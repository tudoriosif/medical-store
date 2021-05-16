import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Aboutus />
      <Contact />
    </div>
  );
}

export default HomePage;
