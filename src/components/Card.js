import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  align-items: flex-start;

  background-color: white;
  border-radius: 10px;
  filter: drop-shadow(0 0 0.25rem black);
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px;
  width: ${props => props.width || "300px"};
`;

const Card = props => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default Card;
