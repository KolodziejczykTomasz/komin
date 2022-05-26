import * as React from "react";
import { IconCheck } from "./icon";

import styled from "styled-components";

const Section = styled.div`
  display: block;
  width: 100%;
  height: auto:
  max-width: 1290px;
  margin: 140px auto 140px auto;
  padding: 0;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  padding: 0 100px;
  @media (max-width: 1200px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }
  @media (max-width: 600px) {
    padding: 0 10px;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
`;
const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 3px solid white;
  transition: 0.1s linear;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 270px;
  height: 270px;
  background-color: #d2ad36;
  color: white;
  -moz-box-shadow: 2px 2px 6px 0 #444;
  -webkit-box-shadow: 2px 2px 6px 0 #444;
  box-shadow: 2px 2px 6px 0 #444;
  transition: 0.1s linear;
  :hover {
    background-color: white;
    color: #d2ad36;
  }

  :hover ${WrapperIcon} {
    border: 3px solid #d2ad36;
    color: #d2ad36;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  padding-top: 40px;
`;
const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  padding: 0 10px;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
`;

const Offer = () => (
  <Section>
    <Wrapper>
      <Card>
        <Icon>
          <WrapperIcon>
            <IconCheck />
          </WrapperIcon>
        </Icon>
        <Description> Przegląd kominiarski </Description>
      </Card>
      <Card>
        <Icon>
          <WrapperIcon>
            <IconCheck />
          </WrapperIcon>
        </Icon>
        <Description> Czyszczenie kominów </Description>
      </Card>
      <Card>
        <Icon>
          <WrapperIcon>
            <IconCheck />
          </WrapperIcon>
        </Icon>
        <Description> Opinie kominiarskie </Description>
      </Card>
      <Card>
        <Icon>
          <WrapperIcon>
            <IconCheck />
          </WrapperIcon>
        </Icon>
        <Description> Odbiór kominiarski </Description>
      </Card>
    </Wrapper>
  </Section>
);

export default Offer;
