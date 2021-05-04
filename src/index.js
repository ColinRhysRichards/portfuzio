import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// import Loader from "./Mobile_Components/Loader";

const { useEffect } = React;

// const loader = { Loader }
const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

const Load = ({ hideLoader }) => {
  useEffect(() => hideLoader());
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
ReactDOM.render(
  <Load
    hideLoader={hideLoader}
    showLoader={showLoader}
  />,
  document.getElementById("root")
)

serviceWorker.unregister();
