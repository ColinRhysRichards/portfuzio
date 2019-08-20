import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body {
    height: 100%;
    width: 100%;
    max-width: 100%;
    margin: 0;
    font-size: 10px;
    line-height: 1.5;
    background-color: white;
}

body {
    font-family: 'Helvetica Neue', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
}

body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, 
}

h1{
 font-family: 'Oswald', sans-serif;
 line-height: 0.9;
 font-weight: 900;
 margin: 0px;
 text-transform: uppercase;
 font-size: 8rem;
 font-style: italic;
 margin-bottom: 40px;
 position: relative;
 display: block;
 word-break: break-all;
}

h2{
  font-family: 'Lobster', cursive;
}

h3{
  font-family: 'Oswald', sans-serif;
}

h4{
    font-family: 'Lato', sans-serif;
    color: #1c1b20;
    font-style: italic;
    font-size: 1.6rem;
  margin-bottom: 20px;
  margin-block-start: .33em;
  margin-block-end: .33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

h5{
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  font-weight: 700;
  font-style: normal;
  font-size: 2rem;
}

h6 {
font-family: 'Open Sans', sans-serif;
  display: block;
  font-size: 0.67em;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

body.modal-open {
    overflow: hidden;
}

`;

export default GlobalStyle;