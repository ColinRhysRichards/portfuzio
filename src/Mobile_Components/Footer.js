import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBolt } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
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

library.add(fab)

const IconContainer = styled.div`
background-Color: "#23212c";
    grid-column: 3 / 5;
    grid-row: 2 / 3;
    display: "grid";
    width: "100%";
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    text-align: center;
`
const mobileIcons = {
  fontSize: "1.6rem",
  color: "#4b3c62",
  padding: "8px",
  justifySelf: "center",
  alignSelf: "center"
};

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: repeat(3,33.33%);
    background-color: white;
    padding: 2rem;
`;

const DesktopWrapper = styled.div`
display: grid;
grid-template-columns: repeat(5, 20%);
grid-template-rows: repeat(3, 33.333%);
background-color: white;
padding: 5rem 2rem 2rem 2rem;
margin-bottom: 2rem; 
`;

const Name = styled.h3`
color: #4b3c62;
grid-column: 1 / 4;
grid-row: 1 / 2;
align-self: center;
`;

const Email = styled.h3`
color: #4b3c62;
grid-column: 1 / 4;
grid-row: 2 / 3;
align-self: center;
`;

const Address = styled.h3`
color: #4b3c62;
grid-column: 1 / 4;
grid-row: 3 / 4;
align-self: center;
`;

const DesktopName = styled.h3`
color: lightgray;
grid-column: 4 / 5;
grid-row: 1 / 2;
font-size: 1.6rem;
margin: .25rem;
`;

const DesktopEmail = styled.h3`
color: lightgray;
grid-column: 4 / 5;
grid-row: 2 / 3;
font-size: 1.6rem;
margin: .25rem;
`;

const DesktopAddress = styled.h3`
color: lightgray;
grid-column: 4 / 5;
grid-row: 3 / 4;
font-size: 1.6rem;
margin: .25rem;
`;

const DesktopThankyou = styled.h3`
color: black;
grid-column: 2 / 3;
grid-row: 2 / 3;
font-size: 2.6rem;
margin: .25rem;
`;

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


export default class Footer extends React.Component {
  render() {
    return (
      <>
        <Desktop>
          <DesktopWrapper>
            <DesktopThankyou>Thank you for viewing</DesktopThankyou>
            <DesktopName>Colin Richards</DesktopName>
            <DesktopEmail>26richco@gmail.com</DesktopEmail>
            <DesktopAddress>Salt Lake City, UT</DesktopAddress>
          </DesktopWrapper>
        </Desktop>

        <Mobile>
          <Wrapper>
            <Name>Colin Richards</Name>
            <Email>26richco@gmail.com</Email>
            <Address>Salt Lake City, UT</Address>
            <IconContainer>
              <A href="https://github.com/ColinRhysRichards" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} style={mobileIcons} /></A>
              <A href="mailto:26richoco@gmail.com?Subject=Hello%20again" target="_top"><FontAwesomeIcon icon={['fab', 'google']} style={mobileIcons} /></A>
              <A href="https://www.linkedin.com/in/colin-richards-b5814b161/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} style={mobileIcons} /></A>
            </IconContainer>
          </Wrapper>
        </Mobile>
      </>
    );
  }
}
