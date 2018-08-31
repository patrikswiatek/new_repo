import React from "react";
import styled from 'styled-components';


const Title = styled.span`
  background: navy;
  color: white;
`;

const Arrow = styled.span`
  background: navy;
  color: white;
`;

const BoxRead = styled.div`
  background: whitesmoke;
`;

export default () => (
  <BoxRead>
    <Title>READ MORE</Title>
    <Arrow> > </Arrow>
  </BoxRead>
);
