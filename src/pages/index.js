import React from "react";
import Hero from "./../components/hero";
import Offer from "./../components/offer";
import styled from 'styled-components';


const App = styled.div`
  height:'120vh
  width:'100%
`;

export default () => (
    <App>
      <Hero />
      <Offer />
    </App>
);
