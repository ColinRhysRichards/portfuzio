import React from "react";

export default class ProjectCard extends React.Component {
  render() {
    return (
      <div className="projectCard" style={this.props.bgPicture}>
        <h3 className="projectTilte">{this.props.projectTitle}</h3>
        <h4 className="projectSubText">{this.props.projectSubText}</h4>
      </div>
    );
  }
}
