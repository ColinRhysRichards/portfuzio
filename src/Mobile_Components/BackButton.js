import React from "react";
import { NavLink } from "react-router-dom";
import Project from "../Mobile_Views/MobProjectView";
import styled from "styled-components";

const BackBtnStyle = styled.h1`
    text-align: right;
    font-size: 3rem;
    font-family: Nunito;
    color: #dddddd;
    font-style: normal;
    font-weight: 500;
    position: fixed;
    right: 7%;

`;

const BackButton = () => {
  return (
    <NavLink path={"/project"} to={"/project"} component={Project}><BackBtnStyle>X</BackBtnStyle></NavLink>
  );
};

export default BackButton;