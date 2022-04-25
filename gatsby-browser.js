import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/theme";
import BaseStyles from "./src/styles/baseStyle";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles />
      {element}
    </ThemeProvider>
  );
};
