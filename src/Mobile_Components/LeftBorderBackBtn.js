import React from "react";
import styled from "styled-components";
import BackButton from "./BackButton";

const Div = styled.div`
/* width: 4rem;
height: 100%;
display: grid;
grid-template-rows: 100%;
grid-template-columns: 100%;
background-color: white;
position: fixed;
top: 0;
left: 0;
z-index: 9999; */
width: 4rem;
height: 100%;
display: grid;
grid-template-rows: 10% auto 10%;
background-color: white;
position: fixed;
top: 0;
left: 0;
z-index: 9999;
`;

const MenuDiv = styled.div`
/* display: grid;
grid-row: 1 / 2;
grid-column: 1/2;
text-align: center;
vertical-align: middle;
align-self: center;
height: fit-content;
width: 100%; */
display: grid;
grid-row: 2/3;
text-align: center;
align-self: middle;
`;

const NavContainer = styled.div`
  display: grid;
  grid-row: 2 / 3;
  align-self: middle;
  background-color: transparent;
 `;

const LeftBorderBackBtn = () => {
    return (
        <Div>
            <MenuDiv>
                <NavContainer>
                    <BackButton />
                </NavContainer>
            </MenuDiv>
        </Div>
    );
};

export default LeftBorderBackBtn;