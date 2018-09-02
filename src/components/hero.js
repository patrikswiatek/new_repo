import React from "react";
import Container from "./container";
import Navbar from "./heroComponents/navbar";
import Header from "./heroComponents/header";
import Boxes from "./heroComponents/boxes";
import Button from "./heroComponents/button";
import styled from 'styled-components';


const Background = styled.div`
  height: 149vh;
  width: 100%;
  background: rgba(18, 38, 54, 1);
  display: flex;
  justifyContent: center;
  alignItems: center;
`;

export default () => (
  <Background>
    <Container>
      <Navbar />
      <Header />
      <Boxes />
      <Button />
    </Container>
  </Background>
);
