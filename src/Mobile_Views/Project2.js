import React from "react";
import styled from "styled-components";
import ProjectPage from "../Mobile_Components/ProjectPage";
import Lawyer from '../images/lawyer.jpg';
import Study from '../images/studyMaterials.jpg';

const Project2 = () => {
  return (
    <ProjectPage
      bgColor={{ backgroundColor: "#251f7f" }}
      projectTitle={"Richards & Richards"}
      siteDescription={"A website for Richards and Richards Law Firm"}
      responsive={"responsive"}
      responsiveResponse={"this will be a whole paragraph about how the site is responsive or something like that it will work and it will be cool"}
      technologies={"technologies"}
      technologiesResponse={"this will be a whole paragraph about how the site is responsive or something like that it will work and it will be cool"}
      planning={"Planning"}
      planningResponse={"this will be a whole paragraph about how the site is responsive or something like that it will work and it will be cool"}
      bgImage={{ backgroundImage: `url(${Lawyer})` }}
      image={{ backgroundImage: `url(${Study})` }}
      link={"Visit Site"}
    />

  );
};

export default Project2;
