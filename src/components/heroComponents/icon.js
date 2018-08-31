import React from "react";
import search from "./../../media/search-circular-symbol.png";
import styled from 'styled-components';


const Image = styled.img`
  height: 40px;
  fontSize: 1.3rem;
  marginLeft: 1%
`;

export default () => <Image src={search} alt="" />;
