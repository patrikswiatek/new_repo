import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Icon from "./icon"


export default () => (
  <div style={{border: '1px solid blue', height:'7vh', width:'60vw', background:'white', display:'flex',
  alignItems:'center', justifyContent:'right', flexWrap: 'nowrap'}}>
    <Logo style={{border: '1px solid blue',height:'100%', display:'flex', width: '20%', justifySelf: 'left'}} />
    <Menu style={{border: '1px solid blue',height:'100%', width:'60%', display:'flex', ajustifySelf: 'right'}} />
    <Icon style={{border: '1px solid blue',height:'100%', display:'flex', width: '20%', justifySelf: 'right'}}/>
  </div>
);
