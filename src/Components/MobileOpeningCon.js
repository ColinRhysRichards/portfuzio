import React from "react";
import styled from "styled-components";


const MobContainer = styled.div`
/* background-color: ${props => props.isBlack ? "black" : "aqua"}; */
height: 90vh;
width: 100vw;
position: relative;
`;


export default class MobOpeningCon extends React.Component {
  render() {
    return (
      <MobContainer style={this.props.bgColor} />
    );
  }
}
