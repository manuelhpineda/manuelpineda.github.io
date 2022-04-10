import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.nav`
  width: min(100% - 20px, 1200px);
  display: flex;
  justify-content: space-between;
`;

export const LogoWrap = styled.div``;

export const Logo = styled.a``;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  width: min(100% - 10px, 400px);
  justify-content: space-between;
`;

export const NavLinks = styled.li`
  padding: 2px;
`;

export const NavLink = styled.a`
  padding: 3px;
`;
