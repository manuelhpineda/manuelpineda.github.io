import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import {
  CloseButton,
  Logo,
  LogoWrap,
  MenuIcon,
  Nav,
  NavLink,
  NavLinks,
  NavList,
  NavWrapper,
  StyledHeader,
} from "./Styles";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <StyledHeader>
      <Nav>
        <LogoWrap>
          <Logo href={"/"}>Manuel Pineda</Logo>
        </LogoWrap>
        <MenuIcon onClick={() => setMenuOpen((curr) => !curr)}>
          <AiOutlineMenu />
        </MenuIcon>
        <NavWrapper menuOpen={menuOpen}>
          <CloseButton onClick={() => setMenuOpen(false)}>
            <AiOutlineClose />
          </CloseButton>
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
        </NavWrapper>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
