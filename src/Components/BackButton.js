import React from "react";
import { NavLink } from "react-router-dom";
import Project from "../Containers/MobProjectView";
import styled from "styled-components";

const BackBtnStyle = styled.h1`
    font-size: 3.5rem;
    font-family: Nunito;
    color: #ff253a;
    font-style: normal;
    font-weight: 500;
    height: auto;
    width: 100%;
    text-decoration: none;
    text-align: right;
`;

const navLink = {
  textDecoration: "none",
  color: "#ff253a"
};

const BackButton = () => {
  return (
    <NavLink style={navLink} path={"/project"} to={"/project"} component={Project}><BackBtnStyle>X</BackBtnStyle></NavLink>
  );
};

export default BackButton;