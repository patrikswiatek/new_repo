import React from "react";
import Title1 from "./title1";
import Text from "./text";
import styled from 'styled-components';


const TitleOne = styled.a`
  background: whitesmoke;
  color: black;
`;

const TextOne = styled.p`
  background: navy;
  color: black;
`;

const BoxText = styled.div`
  background: whitesmoke;
`;


export default () => (
  <BoxText>
    <TitleOne />
    <TextOne />
  </BoxText>
);
