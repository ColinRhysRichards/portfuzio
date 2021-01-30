import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import MobTitle from "../Components/MobTitle";
import Mobile from "../Components/Mobile";
import Desktop from "../Components/Desktop";
import LeftBorder from "../Components/LeftBorder";
import RightBorder from "../Components/RightBorder";
import TopBorder from "../Components/TopBorder";
import DesktopTitle from "../Components/DesktopTitle";
import MainImg from "../images/contact.jpg"

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
margin: 4rem 4rem 0rem 4rem; 
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
            bgColor={{ backgroundImage: `url(${MainImg})` }}
            titleColor={{ color: '#ff253a' }}
            emailColor={{ color: 'white' }}
            title={"get in touch"}
            // subTitle={"section about me"}
            emailTitle={"26richco@gmail.com"}
            emailLink={"mailto:26richco@gmail.com?Subject=Hello%20again"}
          />
          <Footer />
        </DesktopWrapper>
      </Desktop>

      <Mobile>
        <NavBar sectionHeading={"Contact"} />
        <MobTitle
          bgColor={{ backgroundImage: `url(${MainImg})` }}
          titleColor={{ color: '#ff253a' }}
          emailColor={{ color: 'white' }}
          title={"contact"}
          // subTitle={"section about me"}
          emailTitle={"26richco@gmail.com"}
          emailLink={"mailto:26richco@gmail.com?Subject=Hello%20again"}
        // finalText={"final little outro text if I need any"}   
        />
        <Footer />
      </Mobile>
    </div>
  );
};

export default Contact;
