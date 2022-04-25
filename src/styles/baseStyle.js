import { createGlobalStyle } from "styled-components";

import theme, { devices } from "theme";

const BaseStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, html {
    font-size: 16px;
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};
    background-color: ${theme.colors.backgroundMain};
  }

  h1, h2, h3, h4, h5 {
    color: ${theme.colors.heading};
    font-family: ${theme.fonts.heading};
    margin: 3rem 0 1.38rem;
    font-weight: bold;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 1.802rem;
  }

  h2 {
    font-size: 1.602rem;
  }

  h3 {
    font-size: 1.424rem;
  }

  h4 {
    font-size: 1.266rem;
  }

  h5 {
    font-size: 1.125rem;
  }

  small, .text_small {
    font-size: 0.8rem;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }


  ${devices.md} {
    h1 {
      margin-top: 0;
      font-size: 3.052rem;
    }

    h2 {
      font-size: 2.441rem;
    }

    h3 {
      font-size: 1.953rem;
    }

    h4 {
      font-size: 1.563rem;
    }

    h5 {
      font-size: 1.25rem;
    }
  }

`;

export default BaseStyles;
