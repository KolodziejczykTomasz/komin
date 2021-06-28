import React from "react";
import styled from "styled-components";

const WrapperWide = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const WrapperShort = styled.div`
  display: block;
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
  padding: 75px 0;
  color: ${({ theme }) => theme.colors.black};
`;
const Subtitle = styled.span`
display: block;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: 50px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  margin: 0 auto;
  width: 90%;
  @media (max-width: 800px) {
        grid-template-columns: 1fr;
  }
`;
const ContentLeft = styled.div`padding: 10px 10px;`

const ContentRight = styled.div`padding: 10px 10px;`

const About = () => (
  <WrapperWide>
    <WrapperShort>
      <Container>
        <ContentLeft>
          <Subtitle>Kominiarz Andrzej Jankowski do usług</Subtitle>
          <p>
            Od 1997 roku pracuję jako rzemiośle kominiarskim. Posiadam niezbędne
            kwalifikacje uprawniające do zajmowania się eksploatacją urządeń,
            instalacji i sieci na stanowisku Dozoru, uprawnienia do prac
            kontrolno-pomiarowych w zakresie badania szczelności urządzeń i
            instalacji gazowych.
          </p>
          <p>
            Mój Zakład Kominiarski wykonuje usługi kominiarskie dla osób
            prywatnych, firm, wspólnot mieszkaniowych i instytucji.
          </p>
          <p>
            Udzielam gwarancji na wykonane prace, a nasze usługi świadczymy
            solidnie i zgodnie z kominiarskim kunsztem. Posiadamy wymagane
            uprawnienia oraz nowoczesne zaplecze techniczne.
          </p>
          <p>
            Terenem działania jest przede wszystkim Lidzbark Warmiński i jego
            najbliższe okolice.
          </p>
          <p>Potrzebny kominiarz? Zapraszam do kontaktu - Andrzej Jankowski</p>
        </ContentLeft>
        <ContentRight>
          <Subtitle>Zapewniam profesjonalną usuługę w zakresie:</Subtitle>
          <ul>
            <li>
              wykonywania czynności związanych z konserwacją przewodów
              kominowych
            </li>
            <li>wykonywania okresowej kontroli przewodów kominowych</li>
            <li>
              sprawdzania stanu technicznego przewodów kominowych oraz
              podłączenia urządzeń grzewczych i wentylacyjnych do przewodów
              kominowych
            </li>
            <li>
              sporządzania opinii o stanie technicznym przewodów kominowych
            </li>
          </ul>
        </ContentRight>
      </Container>
    </WrapperShort>
  </WrapperWide>
);
export default About;
