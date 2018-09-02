import React from "react";
import styled from 'styled-components';


const BoxRead = styled.div`
  background: rgba(255, 255, 255, 255);
  width: 45%;
  height: 15%
  padding: 0;
}
`;

const Arrow = styled.button`
  color: white;
  background: lightblue;
  height: 100%;
  width: 20%;
`;

const Title = styled.button`
  background: navy;
  height: 100%;
  width: 80%;
  font-size: 9px;
  line-height: 20px;
  color: rgb(255,255,255);
  font-family: "Font Awesome";
`;

export default () => (
  <BoxRead>
    <Title>READ MORE</Title>
    <Arrow> > </Arrow>
</BoxRead>

);
