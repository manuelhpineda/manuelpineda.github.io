import React from "react";
import PropTypes from "prop-types";
import { StyledContainer } from "./Styles";

const Container = ({ children, max, ...rest }) => {
  return (
    <StyledContainer {...rest} max={max}>
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  max: PropTypes.number,
};

export default Container;
