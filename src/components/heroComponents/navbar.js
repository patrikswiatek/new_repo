import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Icon from "./icon"
import styled from 'styled-components';
import Container from "./../container";


const Navbar = styled.div`
    height: 11.2vh;
    width: 79.3vw;
    background: white;
    display: flex;
    align-items: center;
    margin-top: 4.4vh;
    margin-bottom: 20.5vh;
    border-top: 9.2px solid rgba(65, 81, 94, 1);
    justify-content: space-between;
    border-radius: 3px;
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
