import React from "react";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import styled from "styled-components";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

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

const desktopContentStyle = {
  background: "black",
  width: "50%",
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

const MainIcon = styled.h3`
color: black;
font-size: 1.6rem;
display: inline-block;
padding-left: 2rem;
`;

const SectionHeading = styled.h3`
color: #dddddd;
font-size: 1.6rem;
display: inline-block;
font-style: italic;
text-align: center;
`;

export default class NavBar extends React.Component {
  render() {
    return (
      <>
        <Desktop>
          <NavContainer>
            <Popup
              arrow={true}
              modal={true}
              lockScroll={true}
              overlayStyle={{
                background: "white",
                zIndex: "9998",
                width: "50%"
              }}
              contentStyle={desktopContentStyle}
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
        </Desktop>

        <Mobile>
          <div className="mobNavContainer">
            <MainIcon>colin richards</MainIcon>
            <SectionHeading>{this.props.sectionHeading}</SectionHeading>

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
          </div>
        </Mobile>
      </>
    );
  }
}
