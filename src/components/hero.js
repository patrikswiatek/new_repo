import React from "react";
import Container from "./container";
import Navbar from "./heroComponents/navbar";
import Header from "./heroComponents/header";
import Boxes from "./heroComponents/boxes";
import styled from 'styled-components';


const Background = styled.div`
  height: 107vh;
  width: 100%;
  width: 60%;
  background: green;
`;

const Content = styled.div`
  height: 107vh;
  width: 100%;
  width: 60%;
  display: flex;
  alignItems: center;
  justifyContent: center;
  flexDirection: column;
`;

export default () => (
<div className='row'>
  <Background>
    <Container>
      <Content>
        <Navbar />
        <Header />
      </Content>
    </Container>
  </Background>
</div>);
