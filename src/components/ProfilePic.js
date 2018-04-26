import React from "react";
import styled from "styled-components";
import img from "../profilepic.jpg";

//let img = "https://www.buira.org/research/profile/1729";

const ProfilePic = styled.div`
  background-image: url("${img}");
  width: 100px;
  height: 100px;
  background-size: contain;
  border-radius: 50%;
  align-self: flex-end;
  justify-self: center;
  z-index: 9999;
`;

const ProfilePicture = props => {
  return <ProfilePic>{props.children}</ProfilePic>;
};

export default ProfilePicture;
