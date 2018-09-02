import React from "react";
import styled from 'styled-components';
import BoxRead from './box_read'

const BoxUp = styled.div`
border: 3px solid pink;
  background: whitesmoke;
  width: 100%;
  height: 53%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export default () => <BoxUp><BoxRead /></BoxUp>;
