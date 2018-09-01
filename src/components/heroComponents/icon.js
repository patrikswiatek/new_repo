import React from "react";
import search from "./../../media/search-circular-symbol.png";
import styled from 'styled-components';


const Image = styled.div`
border: 1px solid purple;
  height: 100%;
  width: 9%;
  display: flex;
  justify-content: center;
  padding-top: 2%;
`;

const Img = styled.img`
  height: 35px;
`;

export default () => <Image><Img src={search} alt="" /></Image>;
