// DEPENDENCIES
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// MOBILE CONTAINERS
import Home from "./Containers/MobHomeView";
import Project from "./Containers/MobProjectView";
import About from "./Containers/MobAboutView";
import Contact from "./Containers/MobContactView";
import Project1 from "./Containers/Project1";
import Project2 from "./Containers/Project2";
import Project3 from "./Containers/Project3";
//figuring it out

// TABLET CONTAINERS

// DESKTOPCONTAINERS

// GLOBAL CONTAINERS+COMPONENTS
import GlobalStyle from "./GlobalStyles";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project1" component={Project1} />
          <Route path="/project2" component={Project2} />
          <Route path="/project3" component={Project3} />
        </Switch>
        <GlobalStyle />
      </div>
    );
  }
}
