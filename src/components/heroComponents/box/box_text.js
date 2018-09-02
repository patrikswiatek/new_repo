import React from "react";
import Title1 from "./title1";
import Text from "./text";
import styled from 'styled-components';


const BoxText = styled.div`
  background: cyan;
  height: 47%;
  width: 100%;
`;

const TitleOne = styled.a`
  background: whitesmoke;
  color: black;
`;

const TextOne = styled.p`
    width: 304px;
    height: 75px;
    font-size: 13px;
    line-height: 20px;
    color: rgb(119,119,119);
    font-family: "Open Sans";
`;

export default () => (
  <BoxText>
    <TitleOne />
    <TextOne />
  </BoxText>
);
