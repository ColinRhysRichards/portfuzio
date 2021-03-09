import React from "react";
import styled from "styled-components";

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
grid-column: 2/3;
grid-row: 1/2;
text-align: left;
`;

const MainIcon = styled.h3`
color: black;
font-size: 1.6rem;
display: inline-block;
padding-right: 1rem;
`;

const SectionHeading = styled.h3`
color: #dddddd;
font-size: 1.6rem;
display: inline-block;
font-style: italic;
`;



export default class TopBorder extends React.Component {
    render() {
        return (
            <Div>
                <MenuDiv>
                    <MainIcon>Colin Richards</MainIcon>
                    <SectionHeading>{this.props.sectionTitle}</SectionHeading>
                </MenuDiv>
            </Div>
        );
    };
}