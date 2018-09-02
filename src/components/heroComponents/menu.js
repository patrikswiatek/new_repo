import React from "react";
import Link from "gatsby-link";
import styled from 'styled-components';
import styles from "./../../pages/about-css-modules.module.css";


const Menu = styled.div`
  border: 3px solid pink;
  height: 100%;
  width: 72%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  line-height: 22px;
  color: rgb(51,51,51);
  font-weight: 800;
`;

const Span = styled.span`
  whiteSpace: nowrap;
  margin-left: 5.50%;
`;

export default () => (
  <Menu>
    <Span><Link to="/home/" className={styles.link}>HOME</Link></Span>
    <Span><Link to="/about/" className={styles.link}>ABOUT US</Link></Span>
    <Span><Link to="/services/" className={styles.link}>SERVICES</Link></Span>
    <Span><Link to="/news/" className={styles.link}>NEWS</Link></Span>
    <Span><Link to="/locations/" className={styles.link}>LOCATIONS</Link></Span>
    <Span><Link to="/contact/" className={styles.link}>CONTACT</Link></Span>
  </Menu>
);
