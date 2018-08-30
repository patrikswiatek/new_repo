import React from "react";
import Container from "./container";
import Navbar from "./heroComponents/navbar";
import Header from "./heroComponents/header";
import Boxes from "./heroComponents/boxes";


export default () => (
<div className='row'>
  <div style={{height:'107vh', width:'100%', background:'yellow'}}>
  <Container>
  <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    <Navbar/>
    <Header />
    <Boxes style={{width:'100%', display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column'}}/>
    </div>
  </Container>
  </div>
</div>);
