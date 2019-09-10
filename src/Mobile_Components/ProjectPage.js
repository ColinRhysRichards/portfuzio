import React from "react";
import styled from "styled-components";
import Project from "../Mobile_Views/MobProjectView";
import BackButton from "../Mobile_Components/BackButton";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const ProjectContainer = styled.div`
  /* height: 100vh; */
  background-color: white; /* Used if the image is unavailable */
  /* padding: 30px; */
  padding: 10%;
`;

const DesktopContainer = styled.div`
margin-left: 20%;
`;

const DesktopProjectOverview = styled.h5`
margin-top: none;
`;

const ProjectOverview = styled.h5`
margin-top: 20%;
`;

const ProjectTitle = styled.h2`
  margin: 0;
  color: gold;
`;

const SiteDescription = styled.h2`
  margin: 0;
  color: white;
  margin-bottom: 2rem;
`;

const Categories = styled.h6`
color: lightgrey;
`;

const Paragraph = styled.p`
color: white;
`;

const SectionTitle = styled.h2`
  margin: 0;
  color: black;
  margin-bottom: 3rem;
  margin-top: 5rem;
`;

const SectionText = styled.p`
color: darkgrey;
margin-bottom: 5rem;
`;

const DesktopBgImage = styled.div`
  width: 100%;
  background-color: #cccccc; 
  height: 80vh; 
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
`;

const DesktopImage = styled.div`
  width: 100%;
  background-color: #cccccc; 
  height: 40vh; 
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  margin-bottom: 5rem;
`;

const BgImage = styled.div`
  width: 100%;
  background-color: #cccccc; 
  height: 40vh; 
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
`;

const Image = styled.div`
  width: 100%;
  background-color: #cccccc; 
  height: 25vh; 
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  margin-bottom: 5rem;
`;

const VisitSite = styled.div`
background-color: #23212c;
height: 25vh;
display: grid;
grid-template-rows: 10% auto 10%;
`;

const Link = styled.a`
color: white;
display: grid;
grid-row: 2/3;
margin: auto;
text-decoration: none;
`;

const H5 = styled.div`
    font-family: 'Roboto',sans-serif;
    display: block;
    font-size: 1.6rem;
    margin-bottom: 20px;
    overflow: hidden;
color: white;
`;

export default class ProjectPage extends React.Component {
  render() {
    return (
      <div>
        <Desktop>
          <ProjectContainer style={this.props.bgColor}>
            <BackButton />
            <DesktopProjectOverview>Project Overview</DesktopProjectOverview>
            <ProjectTitle>{this.props.projectTitle}</ProjectTitle>
            <SiteDescription>{this.props.siteDescription}</SiteDescription>
            <Categories>{this.props.responsive}</Categories>
            <Paragraph>{this.props.responsiveResponse}</Paragraph>
            <Categories>{this.props.technologies}</Categories>
            <Paragraph>{this.props.technologiesResponse}</Paragraph>
            <Categories>{this.props.planning}</Categories>
            <Paragraph>{this.props.planningResponse}</Paragraph>
          </ProjectContainer>
          <DesktopBgImage style={this.props.bgImage}></DesktopBgImage>
          <ProjectContainer>
            <SectionTitle>This is a Title</SectionTitle>
            <SectionText>asdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj
            asdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkjasdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj
            asdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkjasdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj
          </SectionText>
            <DesktopImage style={this.props.image}></DesktopImage>
          </ProjectContainer>
          <VisitSite><Link href={this.props.link} target="_blank"><H5>Visit Site</H5></Link></VisitSite>
        </Desktop>

        <Mobile>
          <ProjectContainer style={this.props.bgColor}>
            <BackButton />
            <ProjectOverview>Project Overview</ProjectOverview>
            <ProjectTitle>{this.props.projectTitle}</ProjectTitle>
            <SiteDescription>{this.props.siteDescription}</SiteDescription>
            <Categories>{this.props.responsive}</Categories>
            <Paragraph>{this.props.responsiveResponse}</Paragraph>
            <Categories>{this.props.technologies}</Categories>
            <Paragraph>{this.props.technologiesResponse}</Paragraph>
            <Categories>{this.props.planning}</Categories>
            <Paragraph>{this.props.planningResponse}</Paragraph>
          </ProjectContainer>
          <BgImage style={this.props.bgImage}></BgImage>
          <ProjectContainer>
            <SectionTitle>This is a Title</SectionTitle>
            <SectionText>asdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj
            asdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkjasdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj
            asdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkjasdf ;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj asdf;lkj
          </SectionText>
            <Image style={this.props.image}></Image>
          </ProjectContainer>
          <VisitSite><Link href={this.props.link} target="_blank"><H5>Visit Site</H5></Link></VisitSite>
        </Mobile>
      </div>
    );
  }
}
