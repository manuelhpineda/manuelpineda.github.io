import { createGlobalStyle } from "styled-components";
import theme from "../theme";

const BaseStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html {
    font-size: 16px;
    font-family: ${theme.fonts.body};
  }

  h1, h2, h3, h4, h5 {
    font-family: ${theme.fonts.heading};
  }

`;

export default BaseStyles;
