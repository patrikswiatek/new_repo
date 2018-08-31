import React from "react";
import BoxUp from './box_up'
import BoxRead from './box_read'
import BoxText2 from './box_text'
import styled from 'styled-components';


const Box2 = styled.div`
  display: flex;
`;

export default () => (
  <Box2>
    <BoxUp />
    <BoxRead />
    <BoxText2 />
  </Box2>
);
