import React from "react";
import MobNavBar from "../Mobile_Components/MobNavBar";
import MobFooter from "../Mobile_Components/MobFooter";
import MobTitle from "../Mobile_Components/MobTitle";
import styled from "styled-components";
import ProjectCard from "../Mobile_Components/ProjectCard";
import Lawyer from '../images/lawyer.jpg';
import Study from '../images/studyMaterials.jpg';
import Influencer from "../images/influencer.png";
import Slc from "../images/slc.jpg";

const TestWrapper = styled.div`

height: 100%;
`;

const FeaturedProjects = styled.div`
    background-color: #23212c;
    height: 33vh;
    color: white;
    margin-bottom: 0;
    padding-left: 2rem;
`;

const HomeHeroImg = styled.img`
    width: 100%;
    background-color: #cccccc;
    height: 25vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;


const Home = () => {
  return (
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
      <MobFooter />
      <HomeHeroImg src={Slc}></HomeHeroImg>
      <FeaturedProjects>
        <h1>Featured<br />Projects</h1>
      </FeaturedProjects>
      <ProjectCard
        className="projectViewProjectCard"
        bgImage={{ backgroundImage: `url(${Lawyer})` }}
        projectTitle={'Attorney Site'}
        projectSubText={'Richards and Richards Lawfirm'}
      />
      <ProjectCard
        className="projectViewProjectCard"
        bgImage={{ backgroundImage: `url(${Influencer})` }}
        projectTitle={'Mobile Application'}
        projectSubText={'Instagram Influencers'}
      />
      <ProjectCard
        className="projectViewProjectCard"
        bgImage={{ backgroundImage: `url(${Study})` }}
        projectTitle={'Online Site'}
        projectSubText={'The Bookstore'}
      />
    </TestWrapper>
  );
};

export default Home;
