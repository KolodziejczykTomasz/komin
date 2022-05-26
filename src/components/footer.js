import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Iframe from "react-iframe";
import styled from "styled-components";

const WrapperWide = styled.div`
  width: 100%;
  background-color: #2a2a2a;
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
    width: 100%;
  }
`;

const Title = styled.h1`
  padding-top: 75px;
  padding-bottom: 40px;
  @media (max-width: 800px) {
        padding-left: 10px;
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: #d2ad36;
  font-weight: 700;
  margin-left: -20px;
  padding: 0;
  @media (max-width: 800px) {
    text-align: left;
    padding-left: 50px;
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
  margin-left: -80px;
  font-size: 18px;
  padding-top: 30px;
  @media (max-width: 800px) {
    text-align: center;
    font-size: 22px;
    line-height: 36px;
    margin-left: -30px;
  }
`;

const WrapperContactList = styled.ul`
  list-style: none;
  margin-left: -80px;
  font-size: 18px;
  padding-bottom: 50px;
  @media (max-width: 800px) {
    text-align: center;
    font-size: 20px;
    line-height: 36px;
    margin-left: -30px;
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

const WrapperMenuBottom = styled.div`
  @media (max-width: 800px) {
    display: flex;
    width: 100%;
    justify-content: center;
    text-align: center;
  }
`;
const WrapperMenuBottomList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

const WrapperMenuBottomListItem = styled.li`
  padding-right: 10px;
  text-transform: uppercase;
  & a {
    color: white;
  }
  color: white;
  & :hover {
    text-decoration: none;
    color: #d2ad36;
  }
`;

const Footer = () => (
  <WrapperWide id="contact">
    <WrapperShort>
      <ContentContact>
        <Container>
          <WrapperContact>
            <Title>Kontakt</Title>
            <Subtitle style={{ marginBottom: "-10px" }}>
              Zakład Usług Kominiarskich
            </Subtitle>
            <Subtitle>Andrzej Jankowski</Subtitle>
            <WrapperContactListAdress>
              <WrapperMenuBottomList>
                ul. Wiejska 88 lok.4
              </WrapperMenuBottomList>
              <WrapperMenuBottomList>
                11-100 Lidzbark Warmiński
              </WrapperMenuBottomList>
            </WrapperContactListAdress>
            <WrapperContactList>
              <WrapperMenuBottomList>
                Tel. +48 602 537 551
              </WrapperMenuBottomList>
              <WrapperMenuBottomList>
                Email: kominiarzlw@gmail.com
              </WrapperMenuBottomList>
              <WrapperMenuBottomList>NIP: 7431221399</WrapperMenuBottomList>
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
                loading="lazy"></Iframe>
            </div>
          </WrapperMap>
        </Container>
      </ContentContact>
      <ContentCopyright>
        <WrapperMenuBottom>
          <WrapperMenuBottomList>
            <WrapperMenuBottomListItem>
              <Link to="/#home">Strona główna</Link>
            </WrapperMenuBottomListItem>
            <WrapperMenuBottomListItem>
              <Link to="/#about">Firma</Link>
            </WrapperMenuBottomListItem>
            <WrapperMenuBottomListItem>
              <Link to="/#about">Oferta</Link>
            </WrapperMenuBottomListItem>
          </WrapperMenuBottomList>
        </WrapperMenuBottom>
        <div>Copyright © {new Date().getFullYear()}</div>
        <div>
          Webside developed by
          <span style={{ marginLeft: "5px" }}>
            <a
              href="https://nettom24.com/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#d2ad36", fontWeight: 600 }}>
              NETTOM24
            </a>
          </span>
        </div>
      </ContentCopyright>
    </WrapperShort>
  </WrapperWide>
);

export default Footer;
