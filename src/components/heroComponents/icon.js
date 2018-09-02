import React from "react";
import search from "./../../media/search-circular-symbol.png";
import styled from 'styled-components';


const Image = styled.div`
  height: 100%;
  width: 8%;
  display: flex;
  justify-content: center;
  padding-top: 2%;
  margin-right: 0.24%;
`;

const Img = styled.img`
  height: 33px;
`;

export default () => <Image><Img src={search} alt="" /></Image>;
