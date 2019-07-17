import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Responsive from "react-responsive";
// import Popup from "reactjs-popup";

import Home from "./Mobile_Views/MobHomeView";
import Project from "./Mobile_Views/MobProjectView";
import About from "./Mobile_Views/MobAboutView";
import Contact from "./Mobile_Views/MobContactView";
// import Hello from "./Hello";
// import BurgerIcon from "./BurgerIcon";
// import Menu from "./Menu";
import "./App.css";

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Desktop = props => <Responsive {...props} minWidth={768} />;

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center",
//   marginTop: "40px"
// };
// const contentStyle = {
//   background: "rgba(255,255,255,0)",
//   width: "100%",
//   height: "100%",
//   border: "none"
// };

// const Home = () => (
//   <div>
//     <h2>Home Page </h2>
//   </div>
// );

// const Projects = () => (
//   <div>
//     <h2>Project Page</h2>
//   </div>
// );
// const About = () => (
//   <div>
//     <h2>About Page</h2>
//   </div>
// );
// const Contact = () => (
//   <div>
//     <h2>Contact Page</h2>
//   </div>
// );

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        {/* <Hello name="Create cool burger menu using reactjs-popup" /> */}
        <Desktop>
          <h1>what is up chin</h1>
        </Desktop>
        <Mobile>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/project" component={Project} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Mobile>
        {/* <Router>
        <div>
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

          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router> */}
      </div>
    );
  }
}
