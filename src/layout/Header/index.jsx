import React from "react";
import {
  Logo,
  LogoWrap,
  Nav,
  NavLink,
  NavLinks,
  NavList,
  StyledHeader,
} from "./Styles";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <LogoWrap>
          <Logo href={"/"}>Manuel Pineda</Logo>
        </LogoWrap>
        <NavList>
          <NavLinks>
            <NavLink>About</NavLink>
          </NavLinks>
          <NavLinks>
            <NavLink>Work</NavLink>
          </NavLinks>
          <NavLinks>
            <NavLink>Contact Me</NavLink>
          </NavLinks>
        </NavList>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
