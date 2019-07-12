import React from "react";
import { NavLink } from "react-router-dom";

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li>
        <NavLink
          className="navigationLink"
          onClick={close}
          activeClassName="current"
          to="/"
        >
          <div className="menuItemLink">
            <h6 className="menuItemNum">01</h6>
            <h4 className="menuItemTitle">Home</h4>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigationLink"
          onClick={close}
          activeClassName="current"
          to="projects"
        >
          <div className="menuItemLink">
            <h6 className="menuItemNum">02</h6>
            <h4 className="menuItemTitle">Projects</h4>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigationLink"
          onClick={close}
          activeClassName="current"
          to="about"
        >
          <div className="menuItemLink">
            <h6 className="menuItemNum">03</h6>
            <h4 className="menuItemTitle">About</h4>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navigationLink"
          onClick={close}
          activeClassName="current"
          to="contact"
        >
          <div className="menuItemLink">
            <h6 className="menuItemNum">04</h6>
            <h4 className="menuItemTitle">Contact</h4>
          </div>
        </NavLink>
      </li>
    </ul>
    <div className="menuContactInfo">
      <h6>Colin Richards</h6>
      <h6>colin.rhys.richards@gmail.com</h6>
      <h6>github</h6>
    </div>
  </div>
);
