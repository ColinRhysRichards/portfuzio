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
  opacity: 0;
  padding-left: 2rem;
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
opacity: 0;
padding-top: 37vh;
 width: 100%;
 font-size: 10rem;
 animation-name: ${Titleframes};
  animation-duration: 1.5s;
  animation-delay: 1s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const Email = styled.a`
/* padding-top: 37vh; */
opacity: 0;
 width: 100%;
 cursor: pointer;
 display: block;
 text-decoration: none;
    font-size: 2rem;
    line-height: 1.1;
    font-weight: 500;
    margin-bottom: 0px;
    text-transform: none;
    font-family: "Gilroy", sans-serif;
    margin-bottom: 2px;
 
    animation-name: ${Textframes};
  animation-duration: 1.5s;
  animation-delay: 1.5s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const TitleSubText = styled.h3`
  /* top: 48%; */
  color: red;
  /* position: relative; */
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

const TitleQuoteText = styled.h4`
opacity: 0;
 color: white;
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
animation-name: ${Textframes};
  animation-duration: 1.5s;
  animation-delay: 1.5s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;


export default class MobTitle extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.testTl = new TimelineLite({
  //     paused: true
  //   })
  //     ;
  //   this.titleTween = React.createRef();
  // }

  // componentDidMount() {
  //   this.testTl
  //     .from(this.titleTween, 2, { x: -50, autoAlpha: 0, ease: Power4.easeOut }, .25)

  //     .play();
  // }

  render() {
    return (

      <TitleTextContainer style={this.props.bgColor}>
        <TitleText style={this.props.titleColor}>{this.props.title}</TitleText>
        <Email href={this.props.emailLink} target="_top" style={this.props.emailColor}>{this.props.emailTitle}</Email>
        <TitleSubText>{this.props.subTitle}</TitleSubText>
        <TitleQuoteText>{this.props.titleText}</TitleQuoteText>
        <TitleFinalText>{this.props.finalText}</TitleFinalText>
      </TitleTextContainer>
    );
  }
}
