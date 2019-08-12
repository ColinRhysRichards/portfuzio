import React from "react";
import MobNavBar from "../Mobile_Components/MobNavBar";
import MobFooter from "../Mobile_Components/MobFooter";
import MobTitle from "../Mobile_Components/MobTitle";
import ProjectCard from '../Mobile_Components/ProjectCard';

const Project = () => {
  return (
    <div>
      <MobNavBar sectionHeading={"Projects"} />
      <MobTitle
        bgColor={{ background: 'linear-gradient(to bottom, white 50%, #8c926d 50%)' }}
        title={"projects"}
        subTitle={"section about me"}
        titleText={"this will be some text that describes me in some way or things that I like"}
        finalText={"final little outro text if I need any"} />
      <ProjectCard
        bgPicture={{ background: 'linear-gradient(to bottom, white 50%, #8c926d 50%)' }}
        projectTitle={'Richards and Richards Lawfirm'}
        projectSubText={'built with react'}
      />
      <MobFooter />
    </div>
  );
};

export default Project;
