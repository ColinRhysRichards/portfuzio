import React from "react";
import MobNavBar from "../Mobile_Components/MobNavBar";
import MobFooter from "../Mobile_Components/MobFooter";
import MobTitle from "../Mobile_Components/MobTitle";

const Home = () => {
  return (
    <div>
      {/* <div className="homeContainer">
        <MobNavBar />
        <div className="mobHomeBg">
          <MobTitle title={"I am a Web Developer"} color={"white"} />
        </div>

      </div> */}
      <MobNavBar />
      <MobTitle
        bgColor={{ background: 'linear-gradient(to bottom, white 50%, #736d92 50%)' }}
        title={"home"}
        subTitle={"section about me"}
        titleText={"this will be some text that describes me in some way or things that I like"}
        finalText={"final little outro text if I need any"} />
      <MobFooter />
    </div>
  );
};

export default Home;
