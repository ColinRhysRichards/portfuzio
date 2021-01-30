import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
/* background-color: ${props => props.isBlack ? "black" : "aqua"}; */
height: 100vh;
width: auto;
margin: 4rem; 
background-color: black;
color: red;
overflow: hidden;

`;

const DesktopWrapper = () => {
    return (
        <Wrapper>
        </Wrapper>
    );
};

export default DesktopWrapper;