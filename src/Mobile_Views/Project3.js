import React from "react";
import NavBar from "../Mobile_Components/NavBar";
import styled from "styled-components";


const TestWrapper = styled.div`

height: 100%;
`;



const Project3 = () => {
  return (
    <TestWrapper>
      {/* <div className="homeContainer">
        <NavBar />
        <div className="mobHomeBg">
          <MobTitle title={"I am a Web Developer"} color={"white"} />
        </div>

      </div> */}
      <NavBar />
      {/* <MobileOpeningCon bgColor={{ background: "linear-gradient(to top, #23212c 50%, white 50%)" }}> */}
      <h1>Project 3</h1>
    </TestWrapper>
  );
};

export default Project3;
