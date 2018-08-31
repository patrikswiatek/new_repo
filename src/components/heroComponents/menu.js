import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';


const Menu = styled.div`
  border: 3px solid pink;
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Span = styled.span`
  whiteSpace: nowrap;

`;

export default () => (
  <Menu>
    <Span><Link to="/home/">HOME</Link></Span>
    <Span><Link to="/about/">ABOUT US</Link></Span>
    <Span><Link to="/services/">SERVICES</Link></Span>
    <Span><Link to="/news/">NEWS</Link></Span>
    <Span><Link to="/locations/">LOCATIONS</Link></Span>
    <Span><Link to="/contact/">CONTACT</Link></Span>
  </Menu>
);
