import React from "react";
import styled from "styled-components";
import ProfilePicture from "./ProfilePic";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: rgb(29, 49, 58);
  z-index: 0;

  flex-direction: column;
  align-content: center;
  width: 100vw;
`;

const StyledNavBar = props => {
  return (
    <StyledNav>
      {props.children}
      <ProfilePicture />
    </StyledNav>
  );
};

export default StyledNavBar;
