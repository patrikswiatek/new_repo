import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Icon from "./icon"
import styled from 'styled-components';


const Navbar = styled.div`
  border: 1px solid blue;
  height: 7vh;
  width: 60vw;
  background: white;
  display: flex;
  alignItems: center;
  justifyContent: right;
  flexWrap: nowrap;
`;

export default () => (
  <Navbar>
    <Logo />
    <Menu />
    <Icon />
  </Navbar>
);
