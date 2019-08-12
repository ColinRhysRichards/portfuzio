import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBolt } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab)

const mobFooterStyle = {
  backgroundColor: "#23212c",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
  position: "fixed",
  bottom: "0",
  width: "100%",
  zIndex: '9999'
};

const mobileIcons = {
  fontSize: "1rem",
  color: "#DB3EB1",
  padding: "10px",
  justifySelf: "center",
  alignSelf: "center"
};

export default class MobFooter extends React.Component {
  render() {
    return (
      <div style={mobFooterStyle}>
        <FontAwesomeIcon icon={['fab', 'instagram']} style={mobileIcons} />
        <FontAwesomeIcon icon={['fab', 'facebook']} style={mobileIcons} />
        <FontAwesomeIcon icon={['fab', 'github']} style={mobileIcons} />
        <FontAwesomeIcon icon={['fab', 'google']} style={mobileIcons} />
        <FontAwesomeIcon icon={['fab', 'linkedin']} style={mobileIcons} />
      </div>
    );
  }
}
