import React from "react";
import Navigation from "../components/navigation/navigation";
import Hero from "../components/hero/hero";
import About from "../components/about";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navigation id="home"/>
      <Hero />
      <About id="about"/>
      <Footer id="contact"/>
    </>
  );
};

export default Home;
