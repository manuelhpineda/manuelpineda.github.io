import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./Styles";

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
