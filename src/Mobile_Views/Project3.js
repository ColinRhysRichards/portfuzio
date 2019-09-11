import React from "react";
import styled from "styled-components";
import ProjectPage from "../Mobile_Components/ProjectPage";
import YellowBasketball from '../images/yellowbasketball.jpg';
import Localfluence1 from '../images/localfluence_login.PNG';
import Localfluence2 from '../images/localfluence_offer.PNG';
import Localfluence3 from '../images/localfluence_offer.PNG';

const Project3 = () => {
  return (
    <ProjectPage
      bgColor={{ backgroundColor: "#00471B" }}
      projectTitle={"React Memory Game"}
      siteDescription={"A memory game that uses React.js"}
      responsive={"responsive"}
      responsiveResponse={"this will be a whole paragraph about how the site is responsive or something like that it will work and it will be cool"}
      technologies={"technologies"}
      technologiesResponse={"this will be a whole paragraph about how the site is responsive or something like that it will work and it will be cool"}
      planning={"Planning"}
      planningResponse={"this will be a whole paragraph about how the site is responsive or something like that it will work and it will be cool"}
      bgImage={{ backgroundImage: `url(${YellowBasketball})` }}
      image1={{ backgroundImage: `url(${Localfluence1})` }}
      image2={{ backgroundImage: `url(${Localfluence2})` }}
      image3={{ backgroundImage: `url(${Localfluence3})` }}
      link={"https://lfthx.com/auth"}
    />

  );
};

export default Project3;
