import React from "react";
import Title2 from "./title1";
import Text from "./text";
import styled from 'styled-components';


const TitleTwo = styled.a`
  background: whitesmoke;
  color: black;
`;

const TextTwo = styled.p`
  background: navy;
  color: black;
`;

const BoxTextTwo = styled.div`
  background: whitesmoke;
`;


export default () => (
  <BoxTextTwo>
    <TitleTwo />
    <TextTwo />
  </BoxTextTwo>
);
