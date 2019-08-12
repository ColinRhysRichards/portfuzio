import React from "react";

export default class MobTitle extends React.Component {
  render() {
    return (
      <div className="mobContainer" style={this.props.bgColor}>
        <div className="titleTextContainer">
          <h1 className="titleText">{this.props.title}</h1>
          <h3 className="titleSubText">{this.props.subTitle}</h3>
          <h4 className="titleQuoteText">{this.props.titleText}</h4>
          <h5 className="titleFinalText">{this.props.finalText}</h5>
        </div>
      </div>
    );
  }
}
