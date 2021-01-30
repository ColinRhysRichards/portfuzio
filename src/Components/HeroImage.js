import React from "react";
import styled from "styled-components";
import Mobile from "../Mobile_Components/Mobile";
import Desktop from "../Mobile_Components/Desktop";

const HomeHeroImg = styled.img`
    width: 100%;
    background-color: #cccccc;
    height: 50vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const DesktopHeroImg = styled.img`
    width: 100%;
    background-color: #cccccc;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export default class FeaturedProjects extends React.Component {
  render() {
    return (
      <>
        <Desktop>
          <DesktopHeroImg src={this.props.src}></DesktopHeroImg>
        </Desktop>

        <Mobile>
          <HomeHeroImg src={this.props.src}></HomeHeroImg>
        </Mobile>
      </>
    );
  }
}
