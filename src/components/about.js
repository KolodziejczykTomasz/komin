import React from "react";
import styled from "styled-components";

const WrapperWide = styled.div`
  width: 100%;
  background-color: rgba(128, 128, 128, 0.648);
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
`;

const WrapperShort = styled.div`
  display: block;
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
  padding: 75px 20px;
  color: ${({ theme }) => theme.colors.white};
`;
const Subtitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.big};
  font-weight: 600;
  margin-bottom: 50px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.content};
`;

const About = () => (
  <WrapperWide id="about">
    <WrapperShort>
      <Container>
        <Subtitle>Kominiarz Andrzej Jankowski</Subtitle>
        <p>
          Zapraszam do współpracy właścicieli domów jednorodzinnych,
          wielorodzinnych, zarządców nieruchomościami, wspólnoty i spółdzielnie
          mieszkaniowe.
        </p>
        <p>
          Oferuję usługi kominiarskie na terenie Lidzbarka Warmińskiego oraz
          pobliskich miejscowości.
        </p>
      </Container>
    </WrapperShort>
  </WrapperWide>
);
export default About;
