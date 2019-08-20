import React from "react";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";

import Home from "../Mobile_Views/MobHomeView";
import Project from "../Mobile_Views/MobProjectView";
import About from "../Mobile_Views/MobAboutView";
import Contact from "../Mobile_Views/MobContactView";
import BurgerIcon from "../BurgerIcon";
import Menu from "../Menu";

const contentStyle = {
  background: "green",
  width: "100%",
  height: "100%",
  border: "none",
  padding: "none"

};

export default class MobNavBar extends React.Component {
  render() {
    return (
      <div className="mobNavContainer">
        <h3 className="mobMainIcon">$$$</h3>
        <h3 className="mobSectionHeading">{this.props.sectionHeading}</h3>

        <Popup
          arrow={true}
          modal={true}
          lockScroll={true}
          overlayStyle={{
            background: "rgba(199,199,199,0.60)",
            zIndex: "9998"
          }}
          // className={"popupClass"}
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
