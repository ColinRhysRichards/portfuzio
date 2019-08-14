import React from "react";
import styled from "styled-components";

const ProjectTile = styled.div`
  width: 100%;
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 33vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;

const ProjectTitle = styled.h3`
  margin: 0;
  padding-top: 17rem;
  color: white;
  font-size: 15px;
  padding-left: 2rem;
`;

const ProjectSubText = styled.h4`
  font-size: 24px;
  color: white;
  padding-left: 2rem;
`;

export default class ProjectCard extends React.Component {
  render() {
    return (
      // <div className="turd" style={{ backgroundImage: `url("../src/images/monkeyDLuffy.jpg")` }}>
      <ProjectTile style={this.props.bgImage}>
        <ProjectTitle>{this.props.projectTitle}</ProjectTitle>
        <ProjectSubText>{this.props.projectSubText}</ProjectSubText>
      </ProjectTile>
      // </div>
    );
  }
}
