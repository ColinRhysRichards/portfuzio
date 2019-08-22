import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"


const Menu = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-column: 10% auto auto 10%;
  text-align: center;
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

const MenuLink = styled.h2`
  color: white;
  text-align: right;
  margin: 0;
  font-weight: 500;
`;

const Name = styled.h3`
font-weight: 500;
font-size: 1.6rem;
grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: left;
  align-self: center;
`;

const Email = styled.h3`
font-weight: 500;
font-size: 1.6rem;
grid-column-start: 2;
    grid-column-end: 4;
    justify-self: left;
    align-self: center;
`;

const Address = styled.h3`
font-weight: 500;
font-size: 1.6rem;
grid-column-start: 2;
      grid-column-end: 3;
      justify-self: left;
      align-self: center;
`;

export default ({ close }) => (
  <Menu>
    <Ul>
      <li>
        <NavLink
          className="navigationLink test"
          onClick={close}
          activeClassName="current"
          to="/"
        >
          <h3 className="menuItemNum num1">01</h3>
          <MenuLink>Home</MenuLink>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigationLink test"
          onClick={close}
          activeClassName="current"
          to="project"
        >
          <h3 className="menuItemNum num2">02</h3>
          <MenuLink>Projects</MenuLink>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigationLink test"
          onClick={close}
          activeClassName="current"
          to="about"
        >
          <h3 className="menuItemNum num3">03</h3>
          <MenuLink>About</MenuLink>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigationLink test"
          onClick={close}
          activeClassName="current"
          to="contact"
        >
          <h3 className="menuItemNum num4">04</h3>
          <MenuLink>Contact</MenuLink>
        </NavLink>
      </li>
    </Ul>
    <div className="menuContactInfo">
      <Name>Colin Richards</Name>
      <Email>colin.rhys.richards@gmail.com</Email>
      <Address>github</Address>
    </div>
  </Menu>
);
