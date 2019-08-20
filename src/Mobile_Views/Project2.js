import React from "react";
import MobNavBar from "../Mobile_Components/MobNavBar";
import styled from "styled-components";
import BackButton from "../Mobile_Components/BackButton";

const TestWrapper = styled.div`

height: 100%;
`;

const Button = styled.div`

`;

const Project2 = () => {
  return (
    <TestWrapper>
      <BackButton />
      {/* <div className="homeContainer">
        <MobNavBar />
        <div className="mobHomeBg">
          <MobTitle title={"I am a Web Developer"} color={"white"} />
        </div>

      </div> */}
      <MobNavBar />
      {/* <MobileOpeningCon bgColor={{ background: "linear-gradient(to top, #23212c 50%, white 50%)" }}> */}
      <h1>Project 2</h1>
    </TestWrapper>
  );
};

export default Project2;
