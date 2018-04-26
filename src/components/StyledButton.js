import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  display: flex;
  text-align: center;
  background-color: white;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  color: rgb(4, 75, 64);
`;

const StyledButton = props => {
  return <StyledBtn>{props.children}</StyledBtn>;
};

export default StyledButton;
