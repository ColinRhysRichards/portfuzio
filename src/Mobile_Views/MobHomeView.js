import React from "react";
import MobNavBar from "../Mobile_Components/MobNavBar";
import MobFooter from "../Mobile_Components/MobFooter";
import MobTitle from "../Mobile_Components/MobTitle";
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
// import DesktopWrapper from "../Mobile_Components/DesktopWrapper";

const TestWrapper = styled.div`

height: 100%;
`;

const Wrapper = styled.div`
display: grid; 
grid-template-columns: repeat(5, 20%);
grid-template-rows: repeat(5, 20%);
height: 40%;
`;

const BottomDiv = styled.div`
display: grid;
grid-row: 3 / 6;
grid-column: 1 /6;
background-color: #23212c;
z-index: 1;
`;

const FeaturedProjects = styled.div`
display: grid;
grid-row: 1 / 3;
grid-column: 1 /6;
z-index: 3;
    background-color: white;
    /* height: 33vh; */
    color: white;
    margin-bottom: 0;
overflow: hidden;
    /* padding-left: 2rem; */
`;

const H1 = styled.h1`
color: black;
display: grid;
grid-row: 1 / 5;
grid-column: 1 / 5;
z-index: 3;
padding-left: 2rem;
    padding-top: 2rem;
`;

const H1outline = styled.h1`
color: transparent;
display: grid;
grid-row: 1 / 5 ;
grid-column: 1 / 5;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #17e7ca;
z-index: 2;
padding-left: 2rem;
    padding-top: 2rem;
`;

const HomeHeroImg = styled.img`
    width: 100%;
    background-color: #cccccc;
    height: 25vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
/* background-color: ${props => props.isBlack ? "black" : "aqua"}; */
height: 100%;
width: auto;
max-width: 100%;
margin: 4rem; 
background-color: #f8f8f8;
color: red;
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

const Home = () => {
  return (
    <>
      <Desktop>
        <TopBorder sectionTitle={"Home"} />
        <LeftBorder></LeftBorder>
        <RightBorder></RightBorder>
        <BottomBorder></BottomBorder>
        <DesktopWrapper>
          <h1>What is up Chi Hon Es</h1>
          <h1>What is up Chi Hon Es</h1>
          <h1>What is up Chi Hon Es</h1>
          <h1>What is up Chi Hon Es</h1>
          <h1>What is up Chi Hon Es</h1>
          <h1>What is up Chi Hon Es</h1>
          <h1>What is up Chi Hon Es</h1>
          <h1>What is up Chi Hon Es</h1>
          <h1>What is up Chi Hon Es</h1>
          <h1>What is up Chi Hon Es</h1>
          <h1>What is up Chi Hon Es</h1>
        </DesktopWrapper>
      </Desktop>

      <Mobile>
        <TestWrapper>
          {/* <div className="homeContainer">
        <MobNavBar />
        <div className="mobHomeBg">
          <MobTitle title={"I am a Web Developer"} color={"white"} />
        </div>

      </div> */}
          <MobNavBar />
          {/* <MobileOpeningCon bgColor={{ background: "linear-gradient(to top, #23212c 50%, white 50%)" }}> */}
          <MobTitle
            bgColor={{ background: "linear-gradient(to bottom, white 45% , #926d8c 45%)" }}
            title={"home"}
            subTitle={"section about me"}
            titleText={"this will be some text me in things that I like"}
            finalText={"final little outro text if I need any"} />
          {/* </MobileOpeningCon> */}
          <HomeHeroImg src={Slc}></HomeHeroImg>
          <Wrapper>
            <FeaturedProjects>
              <H1>Featured<br />Projects</H1>
            </FeaturedProjects>
            <BottomDiv></BottomDiv>
            <H1outline>Featured<br />Projects</H1outline>


          </Wrapper>
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
          <MobFooter />
        </TestWrapper>
      </Mobile>
    </>
  );
};

export default Home;
