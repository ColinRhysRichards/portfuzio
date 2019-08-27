import React from "react";
import styled from "styled-components";
import { TimelineLite, CSSPlugin, Power4 } from "gsap/all";

const C = CSSPlugin;


const TitleTextContainer = styled.div`
  height: 100vh;
  padding-left: 20%;
  /* position: relative; */
  /* top: 39%; */
  /* background: linear-gradient(to top, #23212c 55%, white 50%); */
`;

const TitleText = styled.h1`
padding-top: 37vh;
 width: 100%;
 font-size: 10rem;
`;

const TitleSubText = styled.h3`
  /* top: 48%; */
  color: red;
  /* position: relative; */
`;

const TitleQuoteText = styled.h4`
 color: white;
`;

const TitleFinalText = styled.h5`

`;


export default class DesktopTitle extends React.Component {
  constructor(props) {
    super(props);
    this.testTl = new TimelineLite({
      paused: true
    })
      ;
    this.titleTween = React.createRef();
  }

  componentDidMount() {
    this.testTl
      .from(this.titleTween, 2, { x: -50, autoAlpha: 0, ease: Power4.easeOut }, .25)

      .play();
  }

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
