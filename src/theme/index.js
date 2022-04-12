import colors from "./colors";
import typography from "./typography";
import breakpoints from "./breakpoints";

const theme = {
  colors,
  ...typography,
  breakpoints,
  space: [
    0,
    "0.125rem", // 2px  1
    "0.25rem", // 4px   2
    "0.5rem", // 8px    3
    "1rem", // 16px     4
    "2rem", // 32px     5
    "4rem", // 64px     6
    "6rem", // 96px     7
    "8rem", // 128px    8
    "16rem", // 256px   9
  ],
};

export default theme;

export const devices = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
  xxl: `@media screen and (min-width: ${breakpoints[4]})`,
};
