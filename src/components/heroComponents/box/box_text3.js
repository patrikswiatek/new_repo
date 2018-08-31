import React from "react";
import Title3 from "./title1";
import Text from "./text";
import styled from 'styled-components';


const TitleThree = styled.a`
  background: whitesmoke;
  color: black;
`;

const TextThree = styled.p`
  background: navy;
  color: black;
`;

const BoxTextThree = styled.div`
  background: whitesmoke;
`;


export default () => (
  <BoxTextThree>
    <TitleThree />
    <TextThree />
  </BoxTextThree>
);
