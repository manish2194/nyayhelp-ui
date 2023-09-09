import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideNavContainer = styled.div`
display: flex;
flex-direction: column;
width: 200px;
background-color: #f5f5f5;
border-radius: 10px;
margin: 10px;
min-height: 300px;
padding: 7px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NavItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  // background-color: ${(props) => (props.active ? "#ddd" : "transparent")};

  &:hover {
  }
`;

const SideNavBar = () => {
  return (
    <SideNavContainer>
      <NavItem active>
        {" "}
        <Link to="/">Dashboard</Link>
      </NavItem>
      <NavItem active>
        {" "}
        <Link to="/"></Link>
      </NavItem>
    </SideNavContainer>
  );
};

export default SideNavBar;
