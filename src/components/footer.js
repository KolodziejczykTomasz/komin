import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 500px;
  background-color: black;
  color: white;
`;
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  height: 100%;
  flex-direction: row;
`;

const Title = styled.h1``;

const WrapperContact = styled.div`
  width: 30%;
`;
const WrapperMap = styled.div`
  width: 70%;
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <WrapperContact>
        <Title>Kontakt</Title>
        <h2>Nazwa Zakładu...</h2>
        <ul>
            <li>ul. .....</li>
            <li>11-100 Lidzbark Warmiński</li>
        </ul>
        <ul>
            <li>Tel. ....</li>
            <li>Email......</li>
        </ul>
      </WrapperContact>
      <WrapperMap>
        <Title>Jak dojechać?</Title>
        <div>Mapa</div>        
      </WrapperMap>
    </Container>
  </Wrapper>
);

export default Footer;
