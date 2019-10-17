import React from "react";
import styled from "styled-components";
import NavBar from "../Mobile_Components/NavBar";
import MobFooter from "../Mobile_Components/Footer";
import MobTitle from "../Mobile_Components/MobTitle";
import ProjectCard from '../Mobile_Components/ProjectCard';
import Influencer from '../images/instagramPhone.jpg';
import Luffy from '../images/monkeyDLuffy.jpg';
import Html from '../images/html.jpg';
import Lawyer from '../images/lawyers.jpg';
import NBA from '../images/nba.jpg';
import Study from '../images/studyMaterials.jpg'
import Project1 from "../Mobile_Views/Project1";
import Project2 from "../Mobile_Views/Project2";
import Project3 from "../Mobile_Views/Project3";
import Mobile from "../Mobile_Components/Mobile";
import Desktop from "../Mobile_Components/Desktop";
import LeftBorder from "../Mobile_Components/LeftBorder";
import RightBorder from "../Mobile_Components/RightBorder";
import TopBorder from "../Mobile_Components/TopBorder";
import DesktopTitle from "../Mobile_Components/DesktopTitle";
import Footer from "../Mobile_Components/Footer";

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


const DesktopWrapper = styled.div`
height: 100%;
width: auto;
max-width: 100%;
margin: 4rem 4rem 0rem 4rem; 
background-color: #f8f8f8;
color: black;
`;

const ProjectCardContainer = styled.div`
display: block;
`;

const Project = () => {
  return (
    <div>
      <Desktop>
        <TopBorder sectionTitle={"Projects"} />
        <LeftBorder></LeftBorder>
        <RightBorder></RightBorder>
        <BottomBorder></BottomBorder>
        <DesktopWrapper>
          <DesktopTitle
            bgColor={{ background: 'linear-gradient(to right, #f8f8f8 25%, #8c926d 25%)' }}
            title={"projects"}
            // subTitle={"section about me"}
            // titleText={"this will be some text me in things that I like"}
            // finalText={"final little outro text if I need any"}
            quoteColor={{ color: 'black' }} />

          <ProjectCardContainer>
            <ProjectCard
              path={"/project2"}
              to={"/project2"}
              component={Project2}
              className="projectViewProjectCard"
              bgImage={{ backgroundImage: `url(${Influencer})` }}
              projectTitle={'Mobile Application'}
              projectSubText={'Localfluence'}
            />
            <ProjectCard
              path={"/project1"}
              to={"/project1"}
              component={Project1}
              className="projectViewProjectCard"
              bgImage={{ backgroundImage: `url(${Lawyer})` }}
              projectTitle={'Attorney Site'}
              projectSubText={'Richards and Richards Lawfirm'}
            />
            <ProjectCard
              path={"/project3"}
              to={"/project3"}
              component={Project3}
              className="projectViewProjectCard"
              bgImage={{ backgroundImage: `url(${NBA})` }}
              projectTitle={'Game'}
              projectSubText={'React Memory Game'}
            />
          </ProjectCardContainer>
          <Footer />
        </DesktopWrapper>
      </Desktop>

      <Mobile>
        <NavBar sectionHeading={"Projects"} />
        <MobTitle
          bgColor={{ background: 'linear-gradient(to bottom, white 45%, #8c926d 45%)' }}
          title={"projects"}
        // subTitle={"section about me"}
        // titleText={"this will be some text that describes me in some way or things that I like"}
        // finalText={"final little outro text if I need any"} 

        />
        <ProjectCard
          path={"/project2"}
          to={"/project2"}
          component={Project2}
          className="projectViewProjectCard"
          bgImage={{ backgroundImage: `url(${Influencer})` }}
          projectTitle={'Mobile Application'}
          projectSubText={'Instagram Influencers'}
        />
        <ProjectCard
          path={"/project1"}
          to={"/project1"}
          component={Project1}
          className="projectViewProjectCard"
          bgImage={{ backgroundImage: `url(${Lawyer})` }}
          projectTitle={'Attorney Site'}
          projectSubText={'Richards and Richards Lawfirm'}
        />
        {/* <ProjectCard
          path={"/project2"}
          to={"/project2"}
          component={Project2}
          className="projectViewProjectCard"
          bgImage={{ backgroundImage: `url(${Luffy})` }}
          projectTitle={'Application'}
          projectSubText={'Pirate King'}
        /> */}
        {/* <ProjectCard
          path={"/project3"}
          to={"/project3"}
          component={Project3}
          className="projectViewProjectCard"
          bgImage={{ backgroundImage: `url(${Html})` }}
          projectTitle={'Game'}
          projectSubText={'Game using HTML'}
        /> */}
        <ProjectCard
          path={"/project3"}
          to={"/project3"}
          component={Project3}
          className="projectViewProjectCard"
          bgImage={{ backgroundImage: `url(${NBA})` }}
          projectTitle={'Game'}
          projectSubText={'React Memory Game'}
        />
        {/* <ProjectCard
          path={"/project3"}
          to={"/project3"}
          component={Project3}
          className="projectViewProjectCard"
          bgImage={{ backgroundImage: `url(${Study})` }}
          projectTitle={'Online Site'}
          projectSubText={'The Bookstore'}
        /> */}
        <MobFooter />
      </Mobile>
    </div>
  );
};

export default Project;
