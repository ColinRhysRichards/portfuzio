import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import styled, { keyframes } from "styled-components";


library.add(fab)

const Keyframes = keyframes`
0% {
  transform: translateY(2rem)
;
}
100% {
  transform: translateY(0rem);
  opacity: 1;
}
`;

const IconContainer = styled.div`
display: grid;
background-color: transparent;
grid-row: 2 / 3;
width: 100%;
text-align: center;
align-self: baseline;
`
const A = styled.a`
opacity: 0;

 animation-name: ${Keyframes};
  animation-duration: 1.5s;
  animation-delay: 1.7s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const mobileIcons = {
  fontSize: "1.6rem",
  color: "black",
  padding: "8px",
  justifySelf: "center",
  alignSelf: "center"
};


export default class RightBorderIcons extends React.Component {
  render() {
    return (
      <IconContainer>
        <A href="https://github.com/ColinRhysRichards" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} style={mobileIcons} /></A>
        <A href="mailto:colin.rhys.richards@gmail.com?Subject=Hello%20again" target="_top"><FontAwesomeIcon icon={['fab', 'google']} style={mobileIcons} /></A>
        <A href="https://www.linkedin.com/in/colin-richards-b5814b161/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} style={mobileIcons} /></A>
      </IconContainer>
    );
  }
}
