import styled from "styled-components";

export const StyledLayout = styled.main`
  height: 100vh;
  width: 100vw;
  margin: -8px;
`;

export const StyledChildrenLayout = styled.main`
  position: relative;
  top: 64px;
  height: calc(100vh - 64px);
  width: 100%;
`;