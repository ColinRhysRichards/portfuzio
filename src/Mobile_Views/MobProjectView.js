import React from "react";
import MobNavBar from "../Mobile_Components/MobNavBar";
import MobFooter from "../Mobile_Components/MobFooter";
import MobTitle from "../Mobile_Components/MobTitle";
import ProjectCard from '../Mobile_Components/ProjectCard';
import Influencer from '../images/influencer.png';
import Luffy from '../images/monkeyDLuffy.jpg';
import Html from '../images/html.jpg';
import Lawyer from '../images/lawyer.jpg';
import Study from '../images/studyMaterials.jpg';

const Project = () => {
  return (
    <div>
      <MobNavBar sectionHeading={"Projects"} />
      <MobTitle
        bgColor={{ background: 'linear-gradient(to bottom, white 45%, #8c926d 45%)' }}
        title={"projects"}
        subTitle={"section about me"}
        titleText={"this will be some text that describes me in some way or things that I like"}
        finalText={"final little outro text if I need any"} />
      {/* <div className="projectCardDiv"></div> */}
      <ProjectCard
        className="projectViewProjectCard"
        bgImage={{ backgroundImage: `url(${Lawyer})` }}
        projectTitle={'Attorney Site'}
        projectSubText={'Richards and Richards Lawfirm'}
      />
      <ProjectCard
        className="projectViewProjectCard"
        bgImage={{ backgroundImage: `url(${Luffy})` }}
        projectTitle={'Application'}
        projectSubText={'Pirate King'}
      />
      <ProjectCard
        className="projectViewProjectCard"
        bgImage={{ backgroundImage: `url(${Html})` }}
        projectTitle={'Game'}
        projectSubText={'Game using HTML'}
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
      <MobFooter />
    </div>
  );
};

export default Project;
