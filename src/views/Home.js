import React from "react";
import Navigation from "../components/navigation/navigation";
import Hero from "../components/hero/hero";
import About from "../components/about";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Footer />
    </>
  );
};

export default Home;
