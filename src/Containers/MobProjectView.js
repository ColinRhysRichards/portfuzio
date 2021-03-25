import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import MobFooter from "../Components/Footer";
import MobTitle from "../Components/MobTitle";
import ProjectCard from '../Components/ProjectCard';
import Influencer from '../images/instagramPhone.jpg';
import Lawyer from '../images/lawyers.jpg';
import NBA from '../images/nba.jpg';
import Project1 from "../Containers/Project1";
import Project2 from "../Containers/Project2";
import Project3 from "../Containers/Project3";
import Mobile from "../Components/Mobile";
import Desktop from "../Components/Desktop";
import LeftBorder from "../Components/LeftBorder";
import RightBorder from "../Components/RightBorder";
import TopBorder from "../Components/TopBorder";
import DesktopTitle from "../Components/DesktopTitle";
import Footer from "../Components/Footer";

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
        <ProjectCard
          path={"/project3"}
          to={"/project3"}
          component={Project3}
          className="projectViewProjectCard"
          bgImage={{ backgroundImage: `url(${NBA})` }}
          projectTitle={'Game'}
          projectSubText={'React Memory Game'}
        />
        <MobFooter />
      </Mobile>
    </div>
  );
};

export default Project;
