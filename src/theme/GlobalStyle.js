import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
  }
`}
`;
export default GlobalStyle;
