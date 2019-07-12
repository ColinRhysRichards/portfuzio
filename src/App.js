import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Popup from "reactjs-popup";
// import Hello from "./Hello";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./App.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "100%",
  height: "100%",
  border: "none"
};

const Home = () => (
  <div>
    <h2>Home Page </h2>
  </div>
);

const Projects = () => (
  <div>
    <h2>Project Page</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About Page</h2>
  </div>
);
const Contact = () => (
  <div>
    <h2>Contact Page</h2>
  </div>
);

const App = () => (
  <div>
    {/* <Hello name="Create cool burger menu using reactjs-popup" /> */}

    <Router>
      <div>
        <Popup
          modal
          overlayStyle={{
            background: "rgba(5,255,255,0.98"
          }}
          className={"popupClass"}
          contentStyle={contentStyle}
          closeOnDocumentClick={true}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <Menu close={close} />}
        </Popup>

        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  </div>
);

export default App;
