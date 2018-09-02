import React from "react";
import BoxUp from './box_up'

import BoxText from './box_text'
import styled from 'styled-components';


const Box1 = styled.div`
border: 1px solid cyan;
  width: 32%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default () => (
  <Box1>
    <BoxUp />
    <BoxText />
  </Box1>
);
