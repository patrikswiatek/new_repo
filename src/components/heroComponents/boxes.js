import React from "react";
import Box1 from './box/box1';
import Box2 from './box/box1';
import Box3 from './box/box1';
import BoxRead from './box/box_read'
import BoxText from './box/box_text'
import styled from 'styled-components';


const Boxes = styled.div`
border: 1px solid blue;
  width: 100%;
  height: 38vh;
  display: flex;
  justify-content: space-between;
`;

export default () => (
  <Boxes>
    <Box1 />
    <Box2 />
    <Box3 />
  </Boxes>
);


border: "1px solid "
