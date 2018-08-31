import React from "react";
import delivery from "./../../media/fast-delivery.png"
import styled from 'styled-components';


const Logo = styled.div`
border: 1px solid darkblue;
  height: 100%;
  width: 20%;
  display: flex;
  justify-self: flex-start;
`;

const ImgHolder = styled.span`
  height: 100%;
  width: 7vw;
`;

const Image = styled.img`
  width: 40%;
`;

const LogoBox = styled.div`
  width: 3vw;
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
