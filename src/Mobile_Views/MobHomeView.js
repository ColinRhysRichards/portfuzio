import React from "react";
import MobNavBar from "../Mobile_Components/MobNavBar";
import Footer from "../Mobile_Components/Footer";
import MobTitle from "../Mobile_Components/MobTitle";
import DesktopTitle from "../Mobile_Components/DesktopTitle";
import styled from "styled-components";
import ProjectCard from "../Mobile_Components/ProjectCard";
import Lawyer from '../images/utah-lawyer-homepage-hero-3.jpg';
import Study from '../images/studyMaterials.jpg';
import Influencer from "../images/influencer.png";
import Slc from "../images/slc.jpg";
import Project1 from "../Mobile_Views/Project1";
import Project2 from "../Mobile_Views/Project2";
import Project3 from "../Mobile_Views/Project3";
import Mobile from "../Mobile_Components/Mobile";
import Desktop from "../Mobile_Components/Desktop";
import LeftBorder from "../Mobile_Components/LeftBorder";
import RightBorder from "../Mobile_Components/RightBorder";
import TopBorder from "../Mobile_Components/TopBorder";
import FeaturedProjects from "../Mobile_Components/FeaturedProjects";
import HeroImage from "../Mobile_Components/HeroImage";

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
margin: 4rem; 
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
            bgColor={{ background: "linear-gradient(to bottom, #f8f8f8 45% , #926d8c 45%)" }}
            title={"home"}
            subTitle={"section about me"}
            titleText={"this will be some text me in things that I like"}
            finalText={"final little outro text if I need any"} />
          <HeroImage src={Slc}></HeroImage>
          <FeaturedProjects
            strokeColor={{ webkitTextStrokeColor: "rgb(146, 109, 140)" }}
          />
          <ProjectCardContainer>
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
              path={"/project2"}
              to={"/project2"}
              component={Project2}
              className="projectViewProjectCard"
              bgImage={{ backgroundImage: `url(${Influencer})` }}
              projectTitle={'Mobile Application'}
              projectSubText={'Instagram Influencers'}
            />
            <ProjectCard
              path={"/project3"}
              to={"/project3"}
              component={Project3}
              className="projectViewProjectCard"
              bgImage={{ backgroundImage: `url(${Study})` }}
              projectTitle={'Online Site'}
              projectSubText={'The Bookstore'}
            />
          </ProjectCardContainer>
          <Footer />
        </DesktopWrapper>
      </Desktop>

      <Mobile>
        <TestWrapper>
          <MobNavBar />
          <MobTitle
            bgColor={{ background: "linear-gradient(to bottom, white 45% , #926d8c 45%)" }}
            title={"home"}
            subTitle={"section about me"}
            titleText={"this will be some text me in things that I like"}
            finalText={"final little outro text if I need any"} />
          <HeroImage src={Slc}></HeroImage>
          <FeaturedProjects />
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
            path={"/project2"}
            to={"/project2"}
            component={Project2}
            className="projectViewProjectCard"
            bgImage={{ backgroundImage: `url(${Influencer})` }}
            projectTitle={'Mobile Application'}
            projectSubText={'Instagram Influencers'}
          />
          <ProjectCard
            path={"/project3"}
            to={"/project3"}
            component={Project3}
            className="projectViewProjectCard"
            bgImage={{ backgroundImage: `url(${Study})` }}
            projectTitle={'Online Site'}
            projectSubText={'The Bookstore'}
          />
          <SkillSection>
            <H4>Title of a Section</H4>
            <H5>List of something<br />Apples<br />Bananas<br />Oranges<br />Kiwis</H5>
            <H4>Title of a Section</H4>
            <H5>List of something<br />Apples<br />Bananas<br />Oranges<br />Kiwis</H5>
            <H4>Title of a Section</H4>
            <H5>List of something<br />Apples<br />Bananas<br />Oranges<br />Kiwis</H5>
          </SkillSection>
          <Footer />
        </TestWrapper>
      </Mobile>
    </>
  );
};

export default Home;
