import React from "react";
import styled from "styled-components";
import RightBorderIcons from "./RightBorderIcons";


const Div = styled.div`
width: 4rem;
height: 100%;
display: grid;
grid-template-rows: 10% auto 10%;
background-color: white;
position: fixed;
top: 0;
right: 0;
z-index: 9999;
`;

const MenuDiv = styled.div`
display: grid;
grid-row: 2/3;
text-align: center;
align-self: middle;
`;

const LeftBorder = () => {
    return (
        <Div>
            <MenuDiv>
                <RightBorderIcons />
            </MenuDiv>
        </Div>
    );
};

export default LeftBorder;