import React from "react";
import MobNavBar from "../Mobile_Components/MobNavBar";
import MobFooter from "../Mobile_Components/MobFooter";
import MobTitle from "../Mobile_Components/MobTitle";

const About = () => {
  return (
    <div>
      <MobNavBar sectionHeading={"About"} />
      <MobTitle
        bgColor={{ background: 'linear-gradient(to bottom, white 50%, #926d79 50%)' }}
        title={"about"}
        subTitle={"section about me"}
        titleText={"this will be some text that describes me in some way or things that I like"}
        finalText={"final little outro text if I need any"} />
      <MobFooter />
    </div>
  );
};

export default About;
