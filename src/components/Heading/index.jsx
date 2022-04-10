import React from "react";
import PropTypes from "prop-types";

import { StyledHeading } from "./Styles";

const Heading = ({ as, children, ...rest }) => {
  return (
    <StyledHeading as={as} {...rest}>
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5"]),
  children: PropTypes.any,
};

export default Heading;
