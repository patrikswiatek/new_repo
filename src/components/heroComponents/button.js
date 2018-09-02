import React from "react";
import styled from 'styled-components';


const Button = styled.div`
border: 1px solid pink;
width: 100%;
height: 12.6vh;
display: flex;
justify-content: center;
align-items: center;
`;

const Btn = styled.button`
font-size: 13px;
line-height: 20px;
color: rgb(255,255,255);
font-family: "Raleway";
font-weight: bold;
width: 11.4vw;
height: 4.4vh;
border-radius: 25px;
display: flex;
justify-content: center;
align-items: center;
&:hover {
  background: lightyellow;
}
`;

export default () => <Button><Btn>VIEW DETAILS</Btn></Button>;
