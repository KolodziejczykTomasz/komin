import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Navigation from "../components/navigation/navigation";
import About from "../components/about"
import Footer from "../components/footer";


const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navigation />
    <About />
      <Footer />
    </ThemeProvider>
  );
};

export default Root;
