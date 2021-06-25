import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../assets/styles/theme";
import GlobalStyle from "../assets/styles/GlobalStyle";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import styled from "styled-components";

const Section = styled.div`
  height: 1000px;
`;

const Home = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navigation />
    <Section>about</Section>
    <Footer />
  </ThemeProvider>
);

export default Home;
