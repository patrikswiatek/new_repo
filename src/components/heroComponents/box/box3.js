import React from "react";
import BoxUp from './box_up'
import BoxRead from './box_read'
import BoxText3 from './box_text'
import styled from 'styled-components';


const Box3 = styled.div`
  display: flex;
`;

export default () => (
  <Box3>
    <BoxUp />
    <BoxRead />
    <BoxText3 />
  </Box3>
);
