import React from "react";
import NavBar from "../Mobile_Components/NavBar";
import styled from "styled-components";
import ProjectPage from "../Mobile_Components/ProjectPage";
import Lawyer from '../images/utah-lawyer-homepage-hero-3.jpg';
import Study from '../images/studyMaterials.jpg';
import Mobile from "../Mobile_Components/Mobile";
import Desktop from "../Mobile_Components/Desktop";
import TopBorder from "../Mobile_Components/TopBorder";
import LeftBorderBackBtn from "../Mobile_Components/LeftBorderBackBtn";
import RightBorder from "../Mobile_Components/RightBorder";
import RBR from "../images/rbrMobile.JPG";
import Spiral from "../images/spiral.jpg";
import Red from "../images/redMountain.jpg";
;
const TestWrapper = styled.div`

height: 100%;
`;

const BottomBorder = styled.div`
height: 4rem;
width: 100%;
display: grid;
grid-template-rows: 10% auto 10%;
background-color: white;
position: fixed;
bottom: 0;
z-index: 9999;
`;

const Project1 = () => {
  return (
    <>
      <Desktop>
        <TopBorder sectionTitle={"Project 1"} />
        <LeftBorderBackBtn />
        <RightBorder></RightBorder>
        <BottomBorder></BottomBorder>
        <ProjectPage
          bgColor={{ backgroundColor: "#104e7d" }}
          projectTitle={"Richards & Richards"}
          siteDescription={"A website for Richards and Richards Law Firm"}
          responsive={"technologies"}
          responsiveResponse={"React.js - React-router - Swipeable views"}
          technologies={"responsive"}
          technologiesResponse={"mobile responsive"}
          planning={"Planning"}
          planningResponse={"Trello Board / Wireframes / Slack"}
          bgImage={{ backgroundImage: `url(${Lawyer})` }}
          image1={{ backgroundImage: `url(${Spiral})` }}
          image2={{ backgroundImage: `url(${RBR})` }}
          image3={{ backgroundImage: `url(${Red})` }}
          sectionTitle={"Richards & Richards Lawfirm"}
          sectionText={"This is a website built with React.js for Richards & Richards Lawfirm. The site is mobile responsive with a different interface than the desktop view."}
          link={"https://www.rbrlawgroup.com"}
        />
      </Desktop>
      <Mobile>
        <ProjectPage
          bgColor={{ backgroundColor: "#104e7d" }}
          projectTitle={"Richards & Richards"}
          siteDescription={"A website for Richards and Richards Law Firm"}
          responsive={"technologies"}
          responsiveResponse={"This is website is mobile responsive and has been made to be easily interacted with on mobile"}
          technologies={"responsive"}
          technologiesResponse={"mobile responsive"}
          planning={"Planning"}
          planningResponse={"Trello Board / Wireframes / Slack"}
          bgImage={{ backgroundImage: `url(${Lawyer})` }}
          image={{ backgroundImage: `url(${Study})` }}
          // image2={{ backgroundImage: `url(${Localfluence2})` }}
          // image3={{ backgroundImage: `url(${Localfluence3})` }}
          sectionTitle={"Richards & Richards Lawfirm"}
          sectionText={"This is a website built with React.js for Richards & Richards Lawfirm. The site is mobile responsive with a different interface than the desktop view."}
          link={"https://www.rbrlawgroup.com"}
        />
      </Mobile>
    </>
  );
};

export default Project1;
