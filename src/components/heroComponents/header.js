import React from "react";
import styled from 'styled-components';


const HeaderHolder = styled.div`
  width: 100%;
  height: 20vh;
  margin-bottom: 23.5vh;
  font-size: 62px;
`;

const Line = styled.div`
  background: yellow;
  margin-left: 0.2vw;
  width: 4.5vw;
  height: 4px;
  margin-bottom: 2.1vh;
`;

const Header = styled.header`
  font-size: 72px;
  line-height: 60px;
  color: rgb(255,255,255);
  font-weight: 800;
  margin-left: -0.3vw;
`;


export default () => <HeaderHolder><Line /><Header>STRONGEST <br />DISTRIBUTION <br />NETWORK</Header></HeaderHolder>;
