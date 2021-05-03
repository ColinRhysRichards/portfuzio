import React from "react";
import { NavLink } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Mobile from "./Components/Mobile";
import Desktop from "./Components/Desktop";
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

const KeyframesX = keyframes`
0% {
  transform: translateX(-2rem)
;
}
100% {
  transform: translateX(0rem);
  opacity: 1;
}
`;

library.add(fab)


const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 10% repeat(6, 15%);
  padding: 0px;
  background-color: #23212c;
`;

const DesktopMenu = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 10% repeat(6, 15%);
  padding: 0px;
  background-color: white;
`;

const MenuLink = styled.h3`
  color: white;
  text-align: right;
  margin: 0;
  font-weight: 500;
  font-size: 2rem;
  align-self: center;
`;

const DesktopMenuLink = styled.div`
  color: black;
  text-align: right;
  margin: 0;
  font-weight: 500;
  font-size: 2rem;
  align-self: center;
  transition:all 1s ease;
  background: white;
    /* Old browsers */
    /* background: linear-gradient(to right, blue 50%, white 50%);
    background-size: 200% 100%;
    background-position:right bottom;
  :hover {
    background-color: red;
    color: black;
  text-align: right;
  margin: 0;
  font-weight: 500;
  font-size: 2rem;
  align-self: center;
  background-position:left bottom; */

  /* animation-name: ${KeyframesX};
  animation-duration: 1.5s;
  animation-delay: .25s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running; */
  }
`


const Name = styled.h3`
font-weight: 500;
font-size: 1.6rem;
  justify-self: left;
  align-self: center;
  width: 100%
`;

const EmailLink = styled.a`
text-decoration: none;
color: lightgray;
`;

const Email = styled.h3`
font-weight: 500;
font-size: 1.6rem;
    justify-self: left;
    align-self: center;
    width: 100%
`;

const Address = styled.h3`
font-weight: 500;
font-size: 1.6rem;
      justify-self: left;
      align-self: center;
      width: 100%
`;

const NavigationContainer = styled.div`
background-Color: #23212c;
grid-column: 2 / 3;
grid-row: 2 / 4;
display: grid;
/* grid-template-rows: repeat(4, 25%); */
width: 100%;
align-self: center;
text-align: left;
/* justify-content: space-between; */
opacity: 0;

 animation-name: ${Keyframes};
  animation-duration: 1.5s;
  animation-delay: .25s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const ContactContainer = styled.div`
background-Color: #23212c;
grid-column: 2 / 3;
grid-row: 5 / 6;
width: 100%;
align-self: center;
text-align: left;
color: lightgray;
opacity: 0;

 animation-name: ${Keyframes};
  animation-duration: 1.5s;
  animation-delay: .45s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const DesktopNavigationContainer = styled.div`
background-Color: white;
grid-column: 2 / 3;
grid-row: 2 / 4;
display: grid;
width: 100%;
align-self: center;
text-align: left;
opacity: 0;

 animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-delay: .25s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const DesktopContactContainer = styled.div`
background-Color: white;
grid-column: 2 / 3;
grid-row: 5 / 6;
width: 100%;
align-self: center;
text-align: left;
color: lightgray;
opacity: 0;

 animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-delay: .45s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const IconContainer = styled.div`
background-Color: #23212c;
grid-column: 2 / 3;
grid-row: 7 / 8;
width: 100%;
align-self: center;
text-align: left;
justify-content: space-between;
display: flex;
opacity: 0;

 animation-name: ${Keyframes};
  animation-duration: 1.5s;
  animation-delay: .65s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

const mobileIcons = {
  fontSize: "1.6rem",
  color: "white"
};

const A = styled.a`
opacity: 0;

 animation-name: ${Keyframes};
  animation-duration: 1.5s;
  animation-delay: .25s;
  animation-timing-function: 1.5s; 
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

export default ({ close }) => (
  <>
    <Desktop>
      <DesktopMenu>

        <DesktopNavigationContainer>
          <NavLink
            className="navigationLink test"
            onClick={close}
            activeClassName="current"
            to="/"
          >
            <h3 className="menuItemNum num1">01</h3>
            <DesktopMenuLink>Home</DesktopMenuLink>
          </NavLink>

          <NavLink
            className="navigationLink test"
            onClick={close}
            activeClassName="current"
            to="project"
          >
            <h3 className="menuItemNum num2">02</h3>
            <DesktopMenuLink>Projects</DesktopMenuLink>
          </NavLink>

          <NavLink
            className="navigationLink test"
            onClick={close}
            activeClassName="current"
            to="about"
          >
            <h3 className="menuItemNum num3">03</h3>
            <DesktopMenuLink>About</DesktopMenuLink>
          </NavLink>

          <NavLink
            className="navigationLink test"
            onClick={close}
            activeClassName="current"
            to="contact"
          >
            <h3 className="menuItemNum num4">04</h3>
            <DesktopMenuLink>Contact</DesktopMenuLink>
          </NavLink>

        </DesktopNavigationContainer>

        <DesktopContactContainer>
          <Name>Colin Richards</Name>
          <EmailLink href="mailto:26richoco@gmail.com?Subject=Hello%20again" target="_top"><Email>26richco@gmail.com</Email></EmailLink>
          <Address>Salt Lake City, UT</Address>
        </DesktopContactContainer>
      </DesktopMenu>
    </Desktop>

    <Mobile>
      <Menu>

        <NavigationContainer>
          <NavLink
            className="navigationLink test"
            onClick={close}
            activeClassName="current"
            to="/"
          >
            <h3 className="menuItemNum num1">01</h3>
            <MenuLink>Home</MenuLink>
          </NavLink>

          <NavLink
            className="navigationLink test"
            onClick={close}
            activeClassName="current"
            to="project"
          >
            <h3 className="menuItemNum num2">02</h3>
            <MenuLink>Projects</MenuLink>
          </NavLink>

          <NavLink
            className="navigationLink test"
            onClick={close}
            activeClassName="current"
            to="about"
          >
            <h3 className="menuItemNum num3">03</h3>
            <MenuLink>About</MenuLink>
          </NavLink>

          <NavLink
            className="navigationLink test"
            onClick={close}
            activeClassName="current"
            to="contact"
          >
            <h3 className="menuItemNum num4">04</h3>
            <MenuLink>Contact</MenuLink>
          </NavLink>

        </NavigationContainer>

        <ContactContainer>
          <Name>Colin Richards</Name>
          <Email>26richco@gmail.com</Email>
          <Address>github</Address>
        </ContactContainer>

        <IconContainer>
          <A href="https://github.com/ColinRhysRichards" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} style={mobileIcons} /></A>
          <A href="mailto:26richco@gmail.com?Subject=Hello%20again" target="_top"><FontAwesomeIcon icon={['fab', 'google']} style={mobileIcons} /></A>
          <A href="https://www.linkedin.com/in/colin-richards-b5814b161/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} style={mobileIcons} /></A>
        </IconContainer>

      </Menu>
    </Mobile>
  </>
);
