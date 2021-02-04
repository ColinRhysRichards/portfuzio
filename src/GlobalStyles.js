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
    font-family: 'Helvetica Neue', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  display: block;
    font-size: 2.8rem;
    line-height: 1.1;
    font-weight: 900;
    margin-bottom: 0px;
    text-transform: none;
    font-family: "Gilroy", sans-serif;
    margin-bottom: 2px;
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
    display: block;
    font-size: 1.6rem;
    margin-bottom: 20px;
    overflow: hidden;
    color: lightgrey;
}

h6 {
font-family: 'Open Sans', sans-serif;
display: inline-block;
    font-style: italic;
    font-weight: 300;
    font-size: 1.1rem;
    margin-bottom: 15px;
}

p{
  font-size: 1.2rem;
  line-height: 1.6;
    margin-bottom: 0px;
    margin: 0px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

body.modal-open {
    overflow: hidden;
}

`;

export default GlobalStyle;