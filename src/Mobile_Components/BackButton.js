import React from "react";
import { NavLink } from "react-router-dom";
import Project from "../Mobile_Views/MobProjectView";

const BackButton = () => {
  return (
    <NavLink path={"/project"} to={"/project"} component={Project}><button><h1>X</h1></button></NavLink>
  );
};

export default BackButton;