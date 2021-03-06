import React from "react";
import styled, { keyframes } from "styled-components";
// import { TimelineLite, CSSPlugin, Power4 } from "gsap/all";

// const C = CSSPlugin;

const Titleframes = keyframes`
0% {
  transform: translateX(-2rem)
;
}
100% {
  transform: translateX(0rem);
  opacity: 1;
}
`;

const Textframes = keyframes`
0% {
  transform: translateY(2rem)
;
}
100% {
  transform: translateY(0rem);
  opacity: 1;
}
`;

const Containerframes = keyframes`
0% {
  transform: translateY(5rem)
;
}
100% {
  transform: translateY(0rem);
  opacity: 1;
}
`;

const TitleTextContainer = styled.div`
  height: 100vh;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  opacity: 0;

  display: grid;
    grid-template-columns: repeat(5,20%);
    grid-template-rows: repeat(20,5%);
  animation-name: ${Containerframes};
  animation-duration: 1s;
  animation-delay: .25s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const TitleText = styled.h1`
width: 100%;
font-size: 10rem;
opacity: 0;
grid-row: 8/9;
grid-column: 2/5;
 
 animation-name: ${Titleframes};
  animation-duration: 1.5s;
  animation-delay: 1s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const TitleSubText = styled.h3`
  color: red;
  opacity: 0;
  margin: 0;
  align-self: end;
  grid-row: 10/11;
grid-column: 2/5;

   
 animation-name: ${Textframes};
  animation-duration: 1.5s;
  animation-delay: 1.3s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const TitleQuoteText = styled.h4`
 color: white;
 opacity: 0;
 /* padding-top: 1rem; */
 padding-right: 3rem;
 grid-row: 9/13;
grid-column: 2/4;
margin: 0;
    align-self: end;
  
 animation-name: ${Textframes};
  animation-duration: 1.5s;
  animation-delay: 1.5s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const TitleFinalText = styled.h5`
opacity: 0;
grid-row: 12/13;
grid-column: 2/5; 

animation-name: ${Textframes};
  animation-duration: 1.5s;
  animation-delay: 1.7s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const TitleTextImage = styled.div`
grid-row: 4/16;
    grid-column: 3/6;
    /* height: 25vh; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  /* padding-left: 20%; */
  /* opacity: 0;  */
`;

const Email = styled.a`
    grid-row: 11/12;
    grid-column: 2/3;
 width: 100%;
 cursor: pointer;
 display: block;
 text-decoration: none;
    font-size: 2.8rem;
    line-height: 1.1;
    font-weight: 900;
    margin-bottom: 0px;
    text-transform: none;
    font-family: "Gilroy", sans-serif;
    margin-bottom: 2px;
    opacity: 0;
     
    animation-name: ${Textframes};
  animation-duration: 1.5s;
  animation-delay: 1.5s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;


export default class DesktopTitle extends React.Component {

  render() {
    return (
      <TitleTextContainer style={this.props.bgColor}>
        <TitleText style={this.props.titleColor}>{this.props.title}</TitleText>
        <Email href={this.props.emailLink} target="_top" style={this.props.emailColor}>{this.props.emailTitle}</Email>
        <TitleSubText>{this.props.subTitle}</TitleSubText>
        <TitleQuoteText style={this.props.quoteColor}>{this.props.titleText}</TitleQuoteText>
        <TitleFinalText>{this.props.finalText}</TitleFinalText>
        <TitleTextImage style={this.props.image}></TitleTextImage>
      </TitleTextContainer>
    );
  }
}

