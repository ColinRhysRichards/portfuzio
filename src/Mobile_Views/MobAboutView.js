import React from "react";
import styled from "styled-components";
import NavBar from "../Mobile_Components/NavBar";
import MobFooter from "../Mobile_Components/Footer";
import MobTitle from "../Mobile_Components/MobTitle";
import Mobile from "../Mobile_Components/Mobile";
import Desktop from "../Mobile_Components/Desktop";
import LeftBorder from "../Mobile_Components/LeftBorder";
import RightBorder from "../Mobile_Components/RightBorder";
import TopBorder from "../Mobile_Components/TopBorder";
import DesktopTitle from "../Mobile_Components/DesktopTitle";
import Footer from "../Mobile_Components/Footer";
import Image from "../images/me_sepia.jpg"
import Neon from "../images/neon.jpg"
import PinkNeon from "../images/pinkNeon.jpg"
import Rio from "../images/riogrande.jpg"
import Me from "../images/meRed.jpg";

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

const SkillSection = styled.div`
background-color: #23212c;
height: 100%;
padding: 2rem;
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

const DesktopSkillSection = styled.div`
background-color: #23212c;
height: 100vh;
/* padding: 2rem; */
display: grid;
    grid-template-columns: repeat(5,20%);
    grid-template-rows: repeat(20,5%);
`;

const H4 = styled.h4`
color: white;
`;

const H5 = styled.h5`
font-size: 1.2rem;
color: #4b3c62;
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
            // subTitle={"section about me"}
            titleText={"I am passionate about learning and about Technology. Web development is an always changing field and brings up new challenges, this allows me to learn, practice, and develop new skills."}
            finalText={"final little outro text if I need any"}
            quoteColor={{ color: 'black' }}
            image={{ backgroundImage: `url(${Image})` }}
          />
          <TextSection>
            <TextSectionTitle>"coLIn rIcHards"</TextSectionTitle>
            <TextSectionText>
              {/* <h3>This will be the title of the section</h3> */}
              <h4>I currently live in Salt Lake City, Utah. I graduated from the University of Utah and also completed a coding bootcamp. I enjoy spending time with family and friends. Living a healthy lifestyle is very important to me, I . I love travelling </h4></TextSectionText>
          </TextSection>

          <ThreePicturesDiv>
            <ImageTile style={{ backgroundImage: `url(${Me})` }}></ImageTile>
            <ImageTile style={{ backgroundImage: `url(${PinkNeon})` }}></ImageTile>
            <ImageTile style={{ backgroundImage: `url(${Rio})` }}></ImageTile>
            <ImageTile style={{ backgroundColor: `rgb(248, 248, 248)` }}></ImageTile>
          </ThreePicturesDiv>

          {/* <DesktopSkillSection>
            <H4>Title of a Section</H4>
            <H5>List of something<br />Apples<br />Bananas<br />Oranges<br />Kiwis</H5>
            <H4>Title of a Section</H4>
            <H5>List of something<br />Apples<br />Bananas<br />Oranges<br />Kiwis</H5>
            <H4>Title of a Section</H4>
            <H5>List of something<br />Apples<br />Bananas<br />Oranges<br />Kiwis</H5>
          </DesktopSkillSection> */}

          <Footer />
        </DesktopWrapper>
      </Desktop>

      <Mobile>
        <NavBar sectionHeading={"About"} />
        <MobTitle
          bgColor={{ background: 'linear-gradient(to bottom, white 45%,  #6d9286 45%)' }}
          title={"about"}
          // subTitle={"section about me"}
          titleText={"I am passionate about learning and about Technology. Web development is an always changing field and brings up new challenges, this allows me to learn, practice, and develop new skills."}
        // finalText={"final little outro text if I need any"}
        />
        {/* <SkillSection>
          <H4>Title of a Section</H4>
          <H5>List of something<br />Apples<br />Bananas<br />Oranges<br />Kiwis</H5>
          <H4>Title of a Section</H4>
          <H5>List of something<br />Apples<br />Bananas<br />Oranges<br />Kiwis</H5>
          <H4>Title of a Section</H4>
          <H5>List of something<br />Apples<br />Bananas<br />Oranges<br />Kiwis</H5>
        </SkillSection> */}
        <img src={Me} alt="Smiley face" height="auto" width="100%"></img>
        {/* <ThreePicturesDiv>
          <ImageTile style={{ backgroundImage: `url(${Me})` }}></ImageTile>
          <ImageTile style={{ backgroundImage: `url(${PinkNeon})` }}></ImageTile>
          <ImageTile style={{ backgroundImage: `url(${Rio})` }}></ImageTile>
          <ImageTile style={{ backgroundColor: `rgb(248, 248, 248)` }}></ImageTile>
        </ThreePicturesDiv> */}

        <MobileTextSection>
          <MobileTag>"coLIn rIcHards"</MobileTag>
          {/* <h3>This will be the title of the section</h3> */}
          <h4>I currently live in Salt Lake City, Utah. I graduated from the University of Utah and also completed a coding bootcamp. I enjoy spending time with family and friends. Living a healthy lifestyle is very important to me, I . I love travelling </h4>
        </MobileTextSection>
        <MobFooter />
      </Mobile>
    </div>
  );
};

export default About;
