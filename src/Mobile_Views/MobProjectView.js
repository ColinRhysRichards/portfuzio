import React from "react";
import MobNavBar from "../Mobile_Components/MobNavBar";
import MobFooter from "../Mobile_Components/MobFooter";
import MobTitle from "../Mobile_Components/MobTitle";
import ProjectCard from '../Mobile_Components/ProjectCard';
import Influencer from '../images/influencer.png';
import Luffy from '../images/monkeyDLuffy.jpg';
import Html from '../images/html.jpg';
import Lawyer from '../images/utah-lawyer-homepage-hero-3.jpg';
import Study from '../images/studyMaterials.jpg';
import Project1 from "../Mobile_Views/Project1";
import Project2 from "../Mobile_Views/Project2";
import Project3 from "../Mobile_Views/Project3";
import Mobile from "../Mobile_Components/Mobile";
import Desktop from "../Mobile_Components/Desktop";

const Project = () => {
  return (
    <>
      <Desktop>
        <h1>Desktop Project Page</h1>
      </Desktop>
      <Mobile>
        <MobNavBar sectionHeading={"Projects"} />
        <MobTitle
          bgColor={{ background: 'linear-gradient(to bottom, white 45%, #8c926d 45%)' }}
          title={"projects"}
          subTitle={"section about me"}
          titleText={"this will be some text that describes me in some way or things that I like"}
          finalText={"final little outro text if I need any"} />
        {/* <div className="projectCardDiv"></div> */}
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
          bgImage={{ backgroundImage: `url(${Luffy})` }}
          projectTitle={'Application'}
          projectSubText={'Pirate King'}
        />
        <ProjectCard
          path={"/project3"}
          to={"/project3"}
          component={Project3}
          className="projectViewProjectCard"
          bgImage={{ backgroundImage: `url(${Html})` }}
          projectTitle={'Game'}
          projectSubText={'Game using HTML'}
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
        <MobFooter />
      </Mobile>
    </>
  );
};

export default Project;
