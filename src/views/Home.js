import React from "react";
import Navigation from "../components/navigation/navigation";
import Hero from "../components/hero/hero";
import About from "../components/about";
import Offer from "../components/offer";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navigation id="home" />
      <Hero />
      <About id="about" />
      <Offer id="offer" />
      <Footer id="contact" />
    </>
  );
};

export default Home;
