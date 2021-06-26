import React from "react";
import Iframe from "react-iframe";
import styled from "styled-components";

const WrapperWide = styled.div`
  width: 100%;
  background-color: black;
`;

const WrapperShort = styled.div`
  display: block;
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
  padding: 0;
  color: white;
`;
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%;
  height: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 800px) {
    flex-direction: column;
    
  }
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  padding-bottom: 40px;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium}; 
  margin: 0;
  padding: 0;
  @media (max-width: 800px) {
    text-align: center;
  } 
`;

const WrapperContact = styled.div`
  width: 45%;
  @media (max-width: 800px) {
        width: 100%;
  }
`;


const WrapperContactListAdress = styled.ul`
  list-style: none;
  margin-left: -30px;
  font-size: 18px;
  padding-top: 30px;
  @media (max-width: 800px) {
    text-align: center;
    font-size: 22px;
    line-height: 36px;
  }
`;

const WrapperContactList = styled.ul`
  list-style: none;
  margin-left: -30px;
  font-size: 18px;
  padding-bottom: 50px;
  @media (max-width: 800px) {
    text-align: center;
    font-size: 20px;
    line-height: 36px;
  }
`;


const WrapperMap = styled.div`
  width: 55%;
  @media (max-width: 800px) {
        width: 100%;
  }
`;

const ContentContact = styled.div``;

const ContentCopyright = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 10px;
  & :nth-child(2) {
    text-align: center;
  }
  & :nth-child(3) {
    text-align: right;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: 100%;
    & :nth-child(1) {
      text-align: center;
    }
    & :nth-child(2) {
      text-align: center;
    }
    & :nth-child(3) {
      text-align: center;
    }
  }
`;

const Footer = () => (
  <WrapperWide>
    <WrapperShort>
      <ContentContact>
        <Container>
          <WrapperContact>
            <Title>Kontakt</Title>
            <Subtitle>Zakład Usług Kominiarskich</Subtitle>
            <Subtitle>Andrzej Jankowski</Subtitle>
            <WrapperContactListAdress>
              <li>ul. Wiejska 88 lok.4</li>
              <li>11-100 Lidzbark Warmiński</li>
            </WrapperContactListAdress>
            <WrapperContactList>
              <li>Tel. 89 767 00 00</li>
              <li>Email: poczta@poczta.pl</li>
              <li>NIP: 7431221399</li>
            </WrapperContactList>
          </WrapperContact>
          <WrapperMap>
            <Title>Jak dojechać?</Title>
            <div>
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2338.285875165687!2d20.56144321528704!3d54.12186098014891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e2f5a704b5ea4d%3A0x93a053ed10e4de61!2sWiejska%2088%2C%2011-100%20Lidzbark%20Warmi%C5%84ski!5e0!3m2!1spl!2spl!4v1624698248571!5m2!1spl!2spl"
                width="100%"
                height="300"
                allowfullscreen=""
                loading="lazy"
              ></Iframe>
            </div>
          </WrapperMap>
        </Container>
      </ContentContact>
      <ContentCopyright>
        <div>Polityka prywatności</div>
        <div>Copyright © {new Date().getFullYear()}</div>
        <div>
          Webside developed by
          <span> NETTOM</span>
        </div>
      </ContentCopyright>
    </WrapperShort>
  </WrapperWide>
);

export default Footer;
