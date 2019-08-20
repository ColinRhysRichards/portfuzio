import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";


// import ProjectModal from "./ProjectCardModal"

const ProjectTile = styled.div`
  width: 100%;
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 33vh; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`;

const ProjectTitle = styled.h3`
  margin: 0;
  padding-top: 17rem;
  color: white;
  font-size: 15px;
  padding-left: 2rem;
`;

const ProjectSubText = styled.h4`
  font-size: 24px;
  color: white;
  padding-left: 2rem;
`;

// const Modal = styled.div`
// height: 100auto;
// width: 100vw;
// background-color: lightgray;
// `;

// const ProjectModal = () => (
//   <Popup
//     position="top left"
//     arrow={true}
//     trigger={<ProjectTile />} modal>
//     {close => (
//       <Modal>
//         <a className="close" onClick={close}>
//           &times;
//         </a>
//         <div className="header"> Modal Title </div>
//         <div className="content">
//           {" "}
//           <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
//           Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
//           delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
//           </h3>

//           <br />
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
//           commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
//           explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?

//         </div>
//         <div className="actions">
//           <Popup
//             trigger={<button className="button"> Trigger </button>}
//             position="top center"
//             closeOnDocumentClick
//           >
//             <span>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
//               magni omnis delectus nemo, maxime molestiae dolorem numquam
//               mollitia, voluptate ea, accusamus excepturi deleniti ratione
//               sapiente! Laudantium, aperiam doloribus. Odit, aut.
//             </span>
//           </Popup>
//           <button
//             className="button"
//             onClick={() => {
//               console.log("modal closed ");
//               close();
//             }}
//           >
//             close modal
//           </button>
//         </div>
//       </Modal>
//     )}
//   </Popup>
// );

export default class ProjectCard extends React.Component {
  render() {
    return (
      // <div className="turd" style={{ backgroundImage: `url("../src/images/monkeyDLuffy.jpg")` }}>
      <NavLink exact path={this.props.path} to={this.props.to} component={this.props.component}>
        <ProjectTile style={this.props.bgImage}>
          <ProjectTitle>{this.props.projectTitle}</ProjectTitle>
          <ProjectSubText>{this.props.projectSubText}</ProjectSubText>
          {/* <ProjectModal /> */}
        </ProjectTile>
      </NavLink>
    );
  }
}
