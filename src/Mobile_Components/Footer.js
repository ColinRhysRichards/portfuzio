import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBolt } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

library.add(fab)

const IconContainer = styled.div`
background-Color: "#23212c";
grid-column: 4 / 6;
grid-row: 2 / 3;
display: "grid";
width: "100%";
align-self: center;
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
grid-template-columns: repeat(4, 25%);
grid-template-rows: repeat(4, 25%);
background-color: white;
padding: 2rem; 
`;

const DesktopWrapper = styled.div`
display: grid;
grid-template-columns: repeat(5, 20%);
grid-template-rows: repeat(3, 33.333%);
background-color: white;
padding: 5rem 2rem 2rem 2rem; 
`;

const Name = styled.h3`
color: #4b3c62;
grid-column: 2 / 4;
grid-row: 1 / 2;
`;

const Email = styled.h3`
color: #4b3c62;
grid-column: 2 / 4;
grid-row: 2 / 3;
`;

const Address = styled.h3`
color: #4b3c62;
grid-column: 2 / 4;
grid-row: 3 / 4;
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

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <Desktop>
          <DesktopWrapper>
            <DesktopThankyou>Thank you for viewing</DesktopThankyou>
            <DesktopName>Colin Richards</DesktopName>
            <DesktopEmail>colin.rhys.richards@gmail.com</DesktopEmail>
            <DesktopAddress>Salt Lake City, UT</DesktopAddress>
          </DesktopWrapper>
        </Desktop>

        <Mobile>
          <Wrapper>
            <Name>Colin Richards</Name>
            <Email>colin.rhys.richards@gmail.com</Email>
            <Address>Salt Lake City, UT</Address>
            <IconContainer>
              <FontAwesomeIcon icon={['fab', 'instagram']} style={mobileIcons} />
              <FontAwesomeIcon icon={['fab', 'facebook']} style={mobileIcons} />
              <FontAwesomeIcon icon={['fab', 'github']} style={mobileIcons} />
              <FontAwesomeIcon icon={['fab', 'google']} style={mobileIcons} />
              <FontAwesomeIcon icon={['fab', 'linkedin']} style={mobileIcons} />
            </IconContainer>
          </Wrapper>
        </Mobile>
      </>
    );
  }
}
