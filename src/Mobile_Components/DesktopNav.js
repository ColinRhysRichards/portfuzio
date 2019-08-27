import React from "react";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import styled from "styled-components";

import Home from "../Mobile_Views/MobHomeView";
import Project from "../Mobile_Views/MobProjectView";
import About from "../Mobile_Views/MobAboutView";
import Contact from "../Mobile_Views/MobContactView";
import BurgerIcon from "../BurgerIcon";
import Menu from "../Menu";

const contentStyle = {
  background: "#23212c",
  width: "100%",
  height: "100%",
  border: "none",
  padding: "none"

};

const NavContainer = styled.div`
  display: grid;
  grid-row: 2 / 3;
  align-self: middle;
  background-color: transparent;
 `;

export default class DesktopNav extends React.Component {
  render() {
    return (
      <NavContainer>
        <Popup
          arrow={true}
          modal={true}
          lockScroll={true}
          overlayStyle={{
            background: "rgba(199,199,199,0.60)",
            zIndex: "9998"
          }}
          contentStyle={contentStyle}
          closeOnDocumentClick={true}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <Menu close={close} />}
        </Popup>

        <NavLink exact path="/" component={Home} />
        <NavLink path="/project" component={Project} />
        <NavLink path="/about" component={About} />
        <NavLink path="/contact" component={Contact} />
      </NavContainer>
    );
  }
}
