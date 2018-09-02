import React from "react";
import delivery from "./../../media/fast-delivery.png"
import styled from 'styled-components';


const Logo = styled.div`
border: 1px solid darkblue;
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
    <Image src={delivery} alt="" />
  </Logo>
);
