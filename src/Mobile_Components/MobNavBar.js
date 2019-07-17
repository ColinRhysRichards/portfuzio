import React from "react";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";

import Home from "../Mobile_Views/MobHomeView";
import Project from "../Mobile_Views/MobProjectView";
import About from "../Mobile_Views/MobAboutView";
import Contact from "../Mobile_Views/MobContactView";
// import Hello from "./Hello";
import BurgerIcon from "../BurgerIcon";
import Menu from "../Menu";
// import "./App.css";

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center",
//   marginTop: "40px"
// };
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "100%",
  height: "100%",
  border: "none"
};

export default class MobNavBar extends React.Component {
  render() {
    return (
      <div className="mobNavContainer">
        <h1 className="mobMainIcon">C_R</h1>
        <h3 className="mobSectionHeading">{this.props.sectionHeading}</h3>

        <Popup
          modal
          overlayStyle={{
            background: "rgba(155,255,255,0.90)"
          }}
          className={"popupClass"}
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
    );
  }
}
