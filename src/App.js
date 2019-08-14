// DEPENDENCIES
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Responsive from "react-responsive";
import styled from "styled-components";

// MOBILE CONTAINERS
import Home from "./Mobile_Views/MobHomeView";
import Project from "./Mobile_Views/MobProjectView";
import About from "./Mobile_Views/MobAboutView";
import Contact from "./Mobile_Views/MobContactView";


// TABLET CONTAINERS

// DESKTOPCONTAINERS

// GLOBAL CONTAINERS+COMPONENTS
import GlobalStyle from "./GlobalStyles";
import "./App.css";

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Desktop = props => <Responsive {...props} minWidth={768} />;

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
        <Desktop>
          <h1>what is up chin</h1>
        </Desktop>
        <Mobile>
          <MobileContainer>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/project" component={Project} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </MobileContainer>
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
        <GlobalStyle />
      </div>
    );
  }
}
