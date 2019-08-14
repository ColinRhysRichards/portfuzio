import React from "react";
import MobNavBar from "../Mobile_Components/MobNavBar";
import MobFooter from "../Mobile_Components/MobFooter";
import MobTitle from "../Mobile_Components/MobTitle";
import styled from "styled-components";
import MobileOpeningCon from "../Mobile_Components/MobileOpeningCon";

const TestWrapper = styled.div`

height: 100%;
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
    </TestWrapper>
  );
};

export default Home;
