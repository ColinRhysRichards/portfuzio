import React from "react";
import { NavLink } from "react-router-dom";

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
          <h6 className="menuItemNum num1">01</h6>
          <h4 className="menuItemTitle title1">Home</h4>
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
          <h6 className="menuItemNum num2">02</h6>
          <h4 className="menuItemTitle title2">Projects</h4>
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
          <h6 className="menuItemNum num3">03</h6>
          <h4 className="menuItemTitle title3">About</h4>
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
          <h6 className="menuItemNum num4">04</h6>
          <h4 className="menuItemTitle title4">Contact</h4>
          {/* </div> */}
        </NavLink>
      </li>
    </ul>
    {/* <hr /> */}
    <div className="menuContactInfo">
      <h6 className="num5">Colin Richards</h6>
      <h6 className="num6">colin.rhys.richards@gmail.com</h6>
      <h6 className="num7">github</h6>
    </div>
  </div>
);
