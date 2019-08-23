import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

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

const Ul = styled.ul`
  position: relative;
  top: 0px;
  /* font-size: 24px; */
  padding: 0px;
  width: 100%;
`;

const MenuLink = styled.h3`
  color: white;
  text-align: right;
  margin: 0;
  font-weight: 500;
  font-size: 2rem;
  align-self: center;
`;

const NavLinkContainer = styled.div`
justify-content: space-between;
display: flex;
grid-column: 2 / 3;
grid-row: 2 / 3;
align-self: center;
    text-align: left;
    width: 100%;
`;

const Name = styled.h3`
font-weight: 500;
font-size: 1.6rem;
  justify-self: left;
  align-self: center;
  width: 100%
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
`;

const ContactContainer = styled.div`
background-Color: #23212c;
grid-column: 2 / 3;
grid-row: 5 / 6;
width: 100%;
align-self: center;
text-align: left;
color: lightgray;
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
`;

const mobileIcons = {
  fontSize: "1.6rem",
  color: "white"
};

export default ({ close }) => (
  <Menu>

    <NavigationContainer>+
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
      <Email>colin.rhys.richards@gmail.com</Email>
      <Address>github</Address>
    </ContactContainer>

    <IconContainer>
      <FontAwesomeIcon icon={['fab', 'instagram']} style={mobileIcons} />
      <FontAwesomeIcon icon={['fab', 'facebook']} style={mobileIcons} />
      <FontAwesomeIcon icon={['fab', 'github']} style={mobileIcons} />
      <FontAwesomeIcon icon={['fab', 'google']} style={mobileIcons} />
      <FontAwesomeIcon icon={['fab', 'linkedin']} style={mobileIcons} />
    </IconContainer>

  </Menu>
);
