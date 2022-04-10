import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./Styles";

const Container = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
