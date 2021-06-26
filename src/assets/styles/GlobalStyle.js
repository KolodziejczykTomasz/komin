import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;  
  font-family: 'Montserrat', sans-serif;
  background-color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.white};
  }
`;

export default GlobalStyle;
