import React from "react";
import styled from "styled-components";
import NavBar from "../Mobile_Components/NavBar";
import Footer from "../Mobile_Components/Footer";
import MobTitle from "../Mobile_Components/MobTitle";
import Mobile from "../Mobile_Components/Mobile";
import Desktop from "../Mobile_Components/Desktop";
import LeftBorder from "../Mobile_Components/LeftBorder";
import RightBorder from "../Mobile_Components/RightBorder";
import TopBorder from "../Mobile_Components/TopBorder";
import DesktopTitle from "../Mobile_Components/DesktopTitle";

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


const DesktopWrapper = styled.div`
height: 100%;
width: auto;
max-width: 100%;
margin: 4rem; 
background-color: #f8f8f8;
color: black;
`;

const Contact = () => {
  return (
    <div>
      <Desktop>
        <TopBorder sectionTitle={"Contact"} />
        <LeftBorder></LeftBorder>
        <RightBorder></RightBorder>
        <BottomBorder></BottomBorder>
        <DesktopWrapper>
          <DesktopTitle
            bgColor={{ background: "linear-gradient(to bottom, #f8f8f8 45% , #926d8c 45%)" }}
            title={"contact"}
            subTitle={"section about me"}
            titleText={"this will be some text me in things that I like"}
            finalText={"final little outro text if I need any"} />
          <Footer />
        </DesktopWrapper>
      </Desktop>

      <Mobile>
        <NavBar sectionHeading={"Contact"} />
        <MobTitle
          bgColor={{ background: 'linear-gradient(to bottom, white 45%, #6d9286 45%)' }}
          title={"contact"}
          subTitle={"section about me"}
          titleText={"this will be some text that describes me in some way or things that I like"}
          finalText={"final little outro text if I need any"} />
        <Footer />
      </Mobile>
    </div>
  );
};

export default Contact;
