// DEPENDENCIES
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Mobile from "./Mobile_Components/Mobile";
import Desktop from "./Mobile_Components/Desktop";

// MOBILE CONTAINERS
import Home from "./Mobile_Views/MobHomeView";
import Project from "./Mobile_Views/MobProjectView";
import About from "./Mobile_Views/MobAboutView";
import Contact from "./Mobile_Views/MobContactView";
import Project1 from "./Mobile_Views/Project1";
import Project2 from "./Mobile_Views/Project2";
import Project3 from "./Mobile_Views/Project3";


// TABLET CONTAINERS

// DESKTOPCONTAINERS

// GLOBAL CONTAINERS+COMPONENTS
import GlobalStyle from "./GlobalStyles";
import "./App.css";

const MobileContainer = styled.div`
  height: 100vh;
  width: 100vw;
  /* overflow: hidden; */
  margin: none;
  /* background-color: green; */
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() { }

  render() {
    return (
      <div>
        {/* <Hello name="Create cool burger menu using reactjs-popup" /> */}
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project1" component={Project1} />
          <Route path="/project2" component={Project2} />
          <Route path="/project3" component={Project3} />
        </Switch>
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
        <GlobalStyle />
      </div>
    );
  }
}
