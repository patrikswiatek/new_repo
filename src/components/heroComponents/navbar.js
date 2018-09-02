import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Icon from "./icon"
import styled from 'styled-components';
import Container from "./../container";


const Navbar = styled.div`
    height: 8.4vh;
    width: 59.6vw;
    background: white;
    display: flex;
    align-items: center;
    margin-top: 3.4vh;
    margin-bottom: 15.5vh;
    border-top: 7px solid orange;
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
