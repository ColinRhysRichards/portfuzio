import React from "react";
import styled from "styled-components";


const TitleTextContainer = styled.div`
  height: 100vh;
  width: 100%;
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


export default class MobTitle extends React.Component {
  render() {
    return (

      <TitleTextContainer style={this.props.bgColor}>
        <TitleText>{this.props.title}</TitleText>
        <TitleSubText>{this.props.subTitle}</TitleSubText>
        <TitleQuoteText>{this.props.titleText}</TitleQuoteText>
        <TitleFinalText>{this.props.finalText}</TitleFinalText>
      </TitleTextContainer>
    );
  }
}
