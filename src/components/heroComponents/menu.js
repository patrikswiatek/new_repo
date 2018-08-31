import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';


const Menu = styled.div`
  border: 1px solid green;
  height: 100%;
  width: 60%;
  display: flex;
  alignItems: center;
  justifyContent: space-around;
  flexDirection: row;
  flexWrap: nowrap;
`;

const Li = styled.span`
  whiteSpace: nowrap;
`;

export default () => (
<Menu>
    <Li><Link to="/home/">HOME</Link></Li>
    <Li><Link to="/about/">ABOUT US</Link></Li>
    <Li><Link to="/services/">SERVICES</Link></Li>
    <Li><Link to="/news/">NEWS</Link></Li>
    <Li><Link to="/locations/">LOCATIONS</Link></Li>
    <Li><Link to="/contact/">CONTACT</Link></Li>
</Menu>
);
