import React from "react";
import delivery from "./../../media/fast-delivery.png"

export default () => (
  <div style={{height:'100%', width:'10vw', display:'flex', justifyAlign:'center', alignItems:'center', verticalAlign:'center'}}>
      <span style={{height:'100%', width:'7vw', marginLeft:'13%', display:'flex', justifyAlign:'center', alignItems:'center'}}>
        <img src={delivery} alt="" style={{width:'40%'}}/>
      </span>
      <div style={{width: '3vw', display:'flex', justifyAlign:'center', alignItems:'center', flexDirection:'column'}}>
        <h4>TRUCKING</h4>
        <a style={{whiteSpace:'nowrap'}}>Logistics & Transportation</a>
      </div>
  </div>
);
