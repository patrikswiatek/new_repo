import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Icon from "./icon"
import styled from 'styled-components';
import Container from "./../container";


const Navbar = styled.div`
  border: 3px solid yellow;
  height: 8vh;
  width: 60vw;
  background: white;
  display: flex;
  align-items: center;
  margin-top: 3.5vh;
`;

export default () => (
  <Container>
    <Navbar>
      <Logo />
      <Menu />
      <Icon />
    </Navbar>
  </Container>
);
