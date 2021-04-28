import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import MobTitle from "../Components/MobTitle";
import DesktopTitle from "../Components/DesktopTitle";
import styled from "styled-components";
import ProjectCard from "../Components/ProjectCard";
import Lawyer from '../images/lawyers.jpg';
import NBA from '../images/nba.jpg';
import Influencer from "../images/instagramPhone.jpg";
// import Slc from "../images/riogrande.jpg";
// import WalkerBuilding from "../images/walkerbuilding.jpg";
import Project1 from "../Containers/Project1";
import Project2 from "../Containers/Project2";
import Project3 from "../Containers/Project3";
import Mobile from "../Components/Mobile";
import Desktop from "../Components/Desktop";
import LeftBorder from "../Components/LeftBorder";
import RightBorder from "../Components/RightBorder";
import TopBorder from "../Components/TopBorder";
import FeaturedProjects from "../Components/FeaturedProjects";
// import HeroImage from "../Components/HeroImage";
import MainImg from "../images/ogden-background.jpg";
import MobileMainImg from "../images/me_sepia.jpg"

const TestWrapper = styled.div`

height: 100%;
`;

const SkillSection = styled.div`
background-color: #23212c;
height: 100%;
padding: 2rem;
`;

const H4 = styled.h4`
color: white;
`;

const H5 = styled.h5`
font-size: 1.2rem;
color: #4b3c62;
`;

const DesktopWrapper = styled.div`
height: 100%;
width: auto;
max-width: 100%;
margin: 4rem 4rem 0rem 4rem; 
background-color: #f8f8f8;
color: black;
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

const ProjectCardContainer = styled.div`
display: block;
`;

const Home = () => {
  return (
    <>
      <Desktop>
        <TopBorder sectionTitle={"Home"} />
        <LeftBorder></LeftBorder>
        <RightBorder></RightBorder>
        <BottomBorder></BottomBorder>
        <DesktopWrapper>
          <DesktopTitle
            bgColor={{ backgroundImage: `url(${MainImg})` }}
            title={"Hello, I'm Colin"}
            titleColor={{ color: 'white' }}
            titleText={"I'm Colin Richards a web developer"}
          />
          <FeaturedProjects
            strokeColor={{ webkitTextStrokeColor: "#ff253a" }}
          />
          <ProjectCardContainer>
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
              projectTitle={'Online Site'}
              projectSubText={'The Bookstore'}
            />
          </ProjectCardContainer>
          <Footer />
        </DesktopWrapper>
      </Desktop>

      <Mobile>
        <TestWrapper>
          <NavBar sectionHeading={"Home"} />
          <MobTitle
            bgColor={{ backgroundImage: `url(${MobileMainImg})` }}
            title={"hello,"}
            titleColor={{ color: 'white' }}
            titleText={"I'm Colin Richards a web developer"}
          />
          <FeaturedProjects />
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
            projectTitle={'Online Site'}
            projectSubText={'The Bookstore'}
          />
          <SkillSection>
            <H4>Front End Development</H4>
            <H5>HTML<br />CSS<br />Javascript<br />Jquery<br />React</H5>
            <H4>Back End Development</H4>
            <H5>MongoDB<br />MySQL<br />Express.js</H5>
            <H4>Other</H4>
            <H5>Git Control<br />Trello Boards</H5>
          </SkillSection>
          <Footer />
        </TestWrapper>
      </Mobile>
    </>
  );
};

export default Home;
