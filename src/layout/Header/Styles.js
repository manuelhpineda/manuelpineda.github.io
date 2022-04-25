import styled from "styled-components";
import { devices } from "../../theme";

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  width: min(100% - 30px, 1200px);
  display: flex;
  justify-content: space-between;
`;

export const LogoWrap = styled.div``;

export const Logo = styled.a``;

export const MenuIcon = styled.button`
  display: block;
  cursor: pointer;
  font-size: 1.6rem;
  background-color: transparent;
  border: none;

  ${devices.md} {
    display: none;
  }
`;

export const NavWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 42px;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${(props) => (props.menuOpen ? 0 : "100%")});
  background-color: white;

  ${devices.md} {
    position: static;
    width: min(100% - 20px, 400px);
    height: 100%;
    padding: 0;
    transform: translateX(0);
    background-color: transparent;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  background-color: transparent;
  border: none;
  font-size: 1.6rem;

  ${devices.md} {
    display: none;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.7rem;

  ${devices.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 1rem;
  }
`;

export const NavLinks = styled.li`
  padding: 2px;
  margin-bottom: 2rem;

  ${devices.md} {
    margin-bottom: 0;
  }
`;

export const NavLink = styled.a`
  padding: 3px;
`;
