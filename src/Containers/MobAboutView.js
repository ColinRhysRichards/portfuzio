import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import MobFooter from "../Components/Footer";
import MobTitle from "../Components/MobTitle";
import Mobile from "../Components/Mobile";
import Desktop from "../Components/Desktop";
import LeftBorder from "../Components/LeftBorder";
import RightBorder from "../Components/RightBorder";
import TopBorder from "../Components/TopBorder";
import DesktopTitle from "../Components/DesktopTitle";
import Footer from "../Components/Footer";
import Image from "../images/me_in_miami.jpg"
import Mph from "../images/15mph.jpg"
import Rio from "../images/riogrande.jpg"
import Me from "../images/me_victor.jpg";

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

const TextSection = styled.div`
height: 75vh;
width: 100%;
background-color: rgb(248, 248, 248);
display: grid;
grid-template-columns: repeat(5,20%);
grid-template-rows: repeat(5,20%);
`;

const TextSectionTitle = styled.h2`
font-family: 'Sedgwick Ave Display', cursive;
font-size: 8rem;
display: grid;
grid-row: 3/4;
grid-column: 2/3;
`;

const MobileTag = styled.h2`
font-family: 'Sedgwick Ave Display', cursive;
font-size: 8rem;
padding-bottom: 4rem;
display: grid;
text-align: center;
`;

const TextSectionText = styled.div`
display: grid;
grid-row: 3/4;
grid-column: 4/5;
`;

const ImageTile = styled.div`
 background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ThreePicturesDiv = styled.div`
height: 45vh;
width: 100%;
background-color: rgb(248, 248, 248);
display: grid;
grid-template-columns: 27% 25% 25% 23%;
grid-template-rows: repeat(1,100%);
`;

const MobileTextSection = styled.div`
background-color: #f8f8f8;
text-align: center;
padding: 2rem;
height: 80vh;
`;

// #926d79
const About = () => {
  return (
    <div>
      <Desktop>
        <TopBorder sectionTitle={"About"} />
        <LeftBorder></LeftBorder>
        <RightBorder></RightBorder>
        <BottomBorder></BottomBorder>
        <DesktopWrapper>
          <DesktopTitle
            bgColor={{ background: 'linear-gradient(to right, #f8f8f8 25%, #6d9286 25%)' }}
            title={"about me"}
            titleText={"I am passionate about learning and about Technology. Web development is an always changing field and brings up new challenges, this allows me to learn, practice, and develop new skills."}
            finalText={"final little outro text if I need any"}
            quoteColor={{ color: 'black' }}
            image={{ backgroundImage: `url(${Image})` }}
          />
          <TextSection>
            <TextSectionTitle>"coLIn rIcHards"</TextSectionTitle>
            <TextSectionText>
              <h4>I live in Salt Lake City, Utah. I graduated from the University of Utah and also completed a coding bootcamp. I enjoy spending time with family and friends and living a healthy lifestyle.</h4></TextSectionText>
          </TextSection>

          <ThreePicturesDiv>
            <ImageTile style={{ backgroundImage: `url(${Me})` }}></ImageTile>
            <ImageTile style={{ backgroundImage: `url(${Mph})` }}></ImageTile>
            <ImageTile style={{ backgroundImage: `url(${Rio})` }}></ImageTile>
            <ImageTile style={{ backgroundColor: `rgb(248, 248, 248)` }}></ImageTile>
          </ThreePicturesDiv>

          <Footer />
        </DesktopWrapper>
      </Desktop>

      <Mobile>
        <NavBar sectionHeading={"About"} />
        <MobTitle
          bgColor={{ background: 'linear-gradient(to bottom, white 45%,  #6d9286 45%)' }}
          title={"about"}
          titleText={"I am passionate about learning and about Technology. Web development is an always changing field and brings up new challenges, this allows me to learn, practice, and develop new skills."}
        />
        <img src={Me} alt="Smiley face" height="auto" width="100%"></img>

        <MobileTextSection>
          <MobileTag>"coLIn rIcHards"</MobileTag>
          <h4>I live in Salt Lake City, Utah. I graduated from the University of Utah and also completed a coding bootcamp. I enjoy spending time with family and friends and living a healthy lifestyle.</h4>
        </MobileTextSection>
        <MobFooter />
      </Mobile>
    </div>
  );
};

export default About;
