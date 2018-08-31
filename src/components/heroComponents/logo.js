import React from "react";
import delivery from "./../../media/fast-delivery.png"
import styled from 'styled-components';


const Logo = styled.div`
  height: 100%;
  width: 10vw;
  marginLeft: 1%;
  display: flex;
  justifyAlign: center;
  alignItems: center;
  verticalAlign: center;
`;

const ImgHolder = styled.span`
  height: 100%;
  width: 7vw;
  marginLeft: 13%;
  display: flex;
  justifyAlign: center;
  alignItems: center;
`;

const Image = styled.img`
  width: 40%;
`;

const LogoBox = styled.div`
  width: 3vw;
  display: flex;
  justifyAlign: center;
  alignItems: center;
  flexDirection: column;
`;

const LogoHeader = styled.h4`
  color: black;
`;

const LogoText = styled.a`
  whiteSpace: nowrap;
`;

export default () => (
  <Logo>
      <ImgHolder>
        <Image src={delivery} alt="" />
      </ImgHolder>
      <LogoBox>
        <LogoHeader>TRUCKING</LogoHeader>
        <LogoText>Logistics & Transportation</LogoText>
      </LogoBox>
  </Logo>
);
