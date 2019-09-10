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
  padding-left: 20%;
  opacity: 0;
  /* position: relative; */
  /* top: 39%; */
  /* background: linear-gradient(to top, #23212c 55%, white 50%); */
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
padding-top: 37vh;
width: 100%;
font-size: 10rem;
opacity: 0;
 
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
  /* top: 48%; */
  color: red;
  opacity: 0;
  /* position: relative; */
   
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
  animation-delay: 1.7s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;


export default class DesktopTitle extends React.Component {
  constructor(props) {
    super(props);
    // this.testTl = new TimelineLite({
    //   paused: true
    // })
    //   ;
    // this.titleTween = React.createRef();
  }

  // componentDidMount() {
  //   this.testTl
  //     .from(this.titleTween, 2, { x: -50, autoAlpha: 0, ease: Power4.easeOut }, .25)

  //     .play();
  // }

  render() {
    return (

      <TitleTextContainer style={this.props.bgColor}>
        <TitleText ref={div => (this.titleTween = div)}>{this.props.title}</TitleText>
        <TitleSubText>{this.props.subTitle}</TitleSubText>
        <TitleQuoteText>{this.props.titleText}</TitleQuoteText>
        <TitleFinalText>{this.props.finalText}</TitleFinalText>
      </TitleTextContainer>
    );
  }
}
