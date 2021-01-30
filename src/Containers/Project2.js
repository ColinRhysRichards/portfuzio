import React from "react";
import styled from "styled-components";
import ProjectPage from "../Components/ProjectPage";
import Instagram from '../images/instagramVideo.jpg';
import Mobile from "../Components/Mobile";
import Desktop from "../Components/Desktop";
import TopBorder from "../Components/TopBorder";
import LeftBorderBackBtn from "../Components/LeftBorderBackBtn";
import RightBorder from "../Components/RightBorder";
// import YellowBasketball from '../images/yellowbasketball.jpg';
import Localfluence1 from '../images/localfluence_login.PNG';
// import Localfluence2 from '../images/localfluence_offer.PNG';
// import Localfluence3 from '../images/localfluence_offer.PNG';
import Accept from "../images/accept.JPG"
import Business from "../images/business.JPG"
// import Jazz from "../images/jazzGame.JPG"
// import Court from "../images/court.jpg"
// import Hoop from "../images/hoop.jpg"

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

const Project2 = () => {
  return (
    <>
      <Desktop>
        <TopBorder sectionTitle={"Project 3"} />
        <LeftBorderBackBtn />
        <RightBorder></RightBorder>
        <BottomBorder></BottomBorder>
        <ProjectPage
          bgColor={{ backgroundColor: "#F56040" }}
          projectTitle={"Localfluence"}
          siteDescription={"An application that allows instagram users to promote local business"}
          responsive={"technologies"}
          responsiveResponse={"React.js"}
          technologies={"responsive"}
          technologiesResponse={"mobile responsive"}
          planning={"Planning"}
          planningResponse={"Trello Board / Wireframes / Slack"}
          bgImage={{ backgroundImage: `url(${Instagram})` }}
          image1={{ backgroundImage: `url(${Accept})` }}
          image2={{ backgroundImage: `url(${Localfluence1})` }}
          image3={{ backgroundImage: `url(${Business})` }}
          sectionTitle={"Localfluence"}
          sectionText={"An application that allows instagram users to promote local business"}
          link={"https://lfthx.com/auth"}
        />
      </Desktop>
      <Mobile>
        <ProjectPage
          bgColor={{ backgroundColor: "#F56040" }}
          projectTitle={"Localfluence"}
          siteDescription={"An application that allows instagram users to promote local business"}
          responsive={"technologies"}
          responsiveResponse={"React.js"}
          technologies={"responsive"}
          technologiesResponse={"mobile responsive"}
          planning={"Planning"}
          planningResponse={"Trello Board / Wireframes / Slack"}
          bgImage={{ backgroundImage: `url(${Instagram})` }}
          image={{ backgroundImage: `url(${Accept})` }}
          // image2={{ backgroundImage: `url(${Localfluence2})` }}
          // image3={{ backgroundImage: `url(${Localfluence3})` }}
          sectionTitle={"Localfluence"}
          sectionText={"An application that allows instagram users to promote local business"}
          link={"https://lfthx.com/auth"}
        />
      </Mobile>
    </>

  );
};

export default Project2;
