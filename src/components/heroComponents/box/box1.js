import React from "react";
import BoxUp from './box_up'
import BoxRead from './box_read'
import BoxText from './box_text'
import styled from 'styled-components';


const Box1 = styled.div`
  display: flex;
`;

export default () => (
  <Box1>
    <BoxUp />
    <BoxRead />
    <BoxText />
  </Box1>
);
