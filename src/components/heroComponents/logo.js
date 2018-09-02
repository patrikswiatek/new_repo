import React from "react";

import styled from 'styled-components';


const Logo = styled.div`
  
  height: 100%;
  width: 19%;
  display: flex;
  justify-self: flex-start;
`;

const Image = styled.img`
  width: 40%;
`;

export default () => (
  <Logo>
    <Image src="" alt="" />
  </Logo>
);
