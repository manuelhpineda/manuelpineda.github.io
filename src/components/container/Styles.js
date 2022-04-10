import styled from "styled-components";

export const StyledContainer = styled.div`
  width: min(100% - 20px, ${({ max }) => (max ? `${max}px` : `1200px`)});
  margin-inline: auto;
`;
