import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";
import Mobile from "../Mobile_Components/Mobile";
import Desktop from "../Mobile_Components/Desktop";


const ProjectTile = styled.div`
  width: 100%;
  background-color: #cccccc; 
  height: 33vh; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  position: relative; 
`;

const DesktopProjectTile = styled.div`
  width: 33%;
  background-color: #cccccc; 
  height: 50vh; 
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  position: relative; 
  display: inline-block;
`;

const ProjectTitle = styled.h3`
  position: absolute;
  top: 70%;
  margin: 0;
  color: white;
  font-size: 15px;
  padding-left: 2rem;
`;

const ProjectSubText = styled.h4`
  position: absolute;
  top: 75%;
  font-size: 24px;
  color: white;
  padding-left: 2rem;
`;

export default class ProjectCard extends React.Component {
  render() {
    return (
      <>
        <Desktop>
          <NavLink exact path={this.props.path} to={this.props.to} component={this.props.component}>
            <DesktopProjectTile style={this.props.bgImage}>
              <ProjectTitle>{this.props.projectTitle}</ProjectTitle>
              <ProjectSubText>{this.props.projectSubText}</ProjectSubText>
            </DesktopProjectTile>
          </NavLink>
        </Desktop>

        <Mobile>
          <NavLink exact path={this.props.path} to={this.props.to} component={this.props.component}>
            <ProjectTile style={this.props.bgImage}>
              <ProjectTitle>{this.props.projectTitle}</ProjectTitle>
              <ProjectSubText>{this.props.projectSubText}</ProjectSubText>
            </ProjectTile>
          </NavLink>
        </Mobile>
      </>
    );
  }
}
