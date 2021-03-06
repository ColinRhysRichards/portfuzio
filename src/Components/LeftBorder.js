import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Div = styled.div`
width: 4rem;
height: 100%;
display: grid;
grid-template-rows: 100%;
background-color: white;
position: fixed;
top: 0;
left: 0;
z-index: 9999;
`;

const MenuDiv = styled.div`
display: grid;
grid-row: 1/2;
text-align: center;
align-self: middle;
`;

const LeftBorder = () => {
    return (
        <Div>
            <MenuDiv>
                <NavBar />
            </MenuDiv>
        </Div>
    );
};

export default LeftBorder;