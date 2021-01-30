import React from "react";
import styled from "styled-components";
import Mobile from "../Components/Mobile";
import Desktop from "../Components/Desktop";

const Wrapper = styled.div`
display: grid; 
grid-template-columns: repeat(5, 20%);
grid-template-rows: repeat(5, 20%);
height: 40vh;
`;

const DesktopWrapper = styled.div`
display: grid; 
grid-template-columns: repeat(5, 20%);
grid-template-rows: repeat(5, 20%);
height: 70vh;
`;

const FeaturedProjectsDiv = styled.div`
display: grid;
grid-row: 1 / 3;
grid-column: 1 /6;
z-index: 3;
background-color: #f8f8f8;
color: white;
margin: 0;
padding: 0;
overflow: hidden;
`;

const H1 = styled.h1`
color: black;
display: grid;
grid-row: 1 / 5;
grid-column: 1 / 5;
z-index: 3;
padding-left: 2rem;
padding-top: 2rem;
`;

const H1Desktop = styled.h1`
color: black;
display: grid;
grid-row: 1 / 5;
grid-column: 1 / 6;
z-index: 3;
padding-left: 20%;
padding-top: 10rem;
`;

const BottomDiv = styled.div`
display: grid;
grid-row: 3 / 6;
grid-column: 1 /6;
background-color: #23212c;
z-index: 1;
`;

const H1outline = styled.h1`
color: transparent;
display: grid;
grid-row: 1 / 5 ;
grid-column: 1 / 5;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #17e7ca;
z-index: 2;
padding-left: 2rem;
padding-top: 2rem;
`;

const H1outlineDesktop = styled.h1`
color: transparent;
display: grid;
grid-row: 1 / 5 ;
grid-column: 1 / 6;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: black;
z-index: 2;
padding-left: 20%;
padding-top: 10rem;
`;

export default class FeaturedProjects extends React.Component {
  render() {
    return (
      <>
        <Desktop>
          <DesktopWrapper>
            <FeaturedProjectsDiv>
              <H1Desktop>Featured<br />Projects</H1Desktop>
            </FeaturedProjectsDiv>
            <BottomDiv></BottomDiv>
            <H1outlineDesktop style={this.props.strokeColor}>Featured<br />Projects</H1outlineDesktop>
          </DesktopWrapper>
        </Desktop>

        <Mobile>
          <Wrapper>
            <FeaturedProjectsDiv>
              <H1>Featured<br />Projects</H1>
            </FeaturedProjectsDiv>
            <BottomDiv></BottomDiv>
            <H1outline>Featured<br />Projects</H1outline>
          </Wrapper>
        </Mobile>
      </>
    );
  }
}
