import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  align-items: flex-start;
  background-color: white;
  border-radius: 10px;
  filter: drop-shadow(0 0 0.25rem black);
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: ${props => props.width || "300px"};
`;

const StyledNavBar = props => {
  return <StyledNav>{props.children}</StyledNav>;
};

export default StyledNavBar;
