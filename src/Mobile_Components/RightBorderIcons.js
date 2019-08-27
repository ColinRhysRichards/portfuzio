import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";


library.add(fab)

const IconContainer = styled.div`
display: grid;
background-color: transparent;
grid-row: 2 / 3;
width: 100%;
text-align: center;
align-self: baseline;
`
const mobileIcons = {
  fontSize: "1.6rem",
  color: "black",
  padding: "8px",
  justifySelf: "center",
  alignSelf: "center"
};


export default class RightBorderIcons extends React.Component {
  render() {
    return (
      <IconContainer>
        <FontAwesomeIcon icon={['fab', 'instagram']} style={mobileIcons} />
        <FontAwesomeIcon icon={['fab', 'facebook']} style={mobileIcons} />
        <FontAwesomeIcon icon={['fab', 'github']} style={mobileIcons} />
        <FontAwesomeIcon icon={['fab', 'google']} style={mobileIcons} />
        <FontAwesomeIcon icon={['fab', 'linkedin']} style={mobileIcons} />
      </IconContainer>
    );
  }
}
