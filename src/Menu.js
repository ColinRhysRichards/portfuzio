import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components"


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
  <div className="menu">
    <ul>
      <li>
        <NavLink
          className="navigationLink test"
          onClick={close}
          activeClassName="current"
          to="/"
        >
          {/* <div className="menuItemLink"> */}
          <h3 className="menuItemNum num1">01</h3>
          <h2 className="menuItemTitle title1">Home</h2>
          {/* </div> */}
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigationLink test"
          onClick={close}
          activeClassName="current"
          to="project"
        >
          {/* <div className="menuItemLink"> */}
          <h3 className="menuItemNum num2">02</h3>
          <h2 className="menuItemTitle title2">Projects</h2>
          {/* </div> */}
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigationLink test"
          onClick={close}
          activeClassName="current"
          to="about"
        >
          {/* <div className="menuItemLink"> */}
          <h3 className="menuItemNum num3">03</h3>
          <h2 className="menuItemTitle title3">About</h2>
          {/* </div> */}
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigationLink test"
          onClick={close}
          activeClassName="current"
          to="contact"
        >
          {/* <div className="menuItemLink"> */}
          <h3 className="menuItemNum num4">04</h3>
          <h2 className="menuItemTitle title4">Contact</h2>
          {/* </div> */}
        </NavLink>
      </li>
    </ul>
    {/* <hr /> */}
    <div className="menuContactInfo">
      <Name>Colin Richards</Name>
      <Email>colin.rhys.richards@gmail.com</Email>
      <Address>github</Address>
    </div>
  </div>
);
