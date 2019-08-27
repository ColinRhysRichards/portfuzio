import React from "react";
import styled from "styled-components";
import DesktopNav from "./DesktopNav";

const Div = styled.div`
width: 100%;
height: 4rem;
display: grid;
grid-template-columns: 4rem auto 4rem;
grid-template-rows: auto;
background-color: white;
position: fixed;
top: 0;
z-index: 9999;
`;

const MenuDiv = styled.div`
/* display: grid; */
grid-column: 2/3;
grid-row: 1/2;
text-align: left;
/* align-self: flex-start; */
`;

const MainIcon = styled.h3`
color: red;
font-size: 1.6rem;
display: inline-block;
padding-right: 5px;
`;

const SectionHeading = styled.h3`
color: black;
font-size: 1.6rem;
display: inline-block;
`;



export default class TopBorder extends React.Component {
    render() {
        return (
            <Div>
                <MenuDiv>
                    <MainIcon>$$$</MainIcon>
                    <SectionHeading>{this.props.sectionTitle}</SectionHeading>
                </MenuDiv>
            </Div>
        );
    };
}