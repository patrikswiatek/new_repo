import React from "react";
import Hero from "./../components/hero";
import Offer from "./../components/offer";
import styled from 'styled-components';

// WebFontConfig = {
//   google: {
//     families: ['Open Sans Condensed:300,700']
//   }
// };
const Index = styled.div`
  width: 100vw,
  height: 190vh,
`;


export default ({ data }) => (
    <Index>
      <Hero />
      <Offer />
    </Index>
);
