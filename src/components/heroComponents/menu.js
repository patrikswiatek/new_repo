import React from "react";
import Link from "gatsby-link";

export default () => (
<div style={{border: '1px solid green', height:'100%', width: '60%', display:'flex',
justifyContent:'space-around', alignItems:'center', flexDirection:'row', flexWrap: 'nowrap'}}>
  <div>
    <Link to="/home/" style={{whiteSpace: 'nowrap'}}>HOME</Link>
  </div>
  <div>
    <Link to="/about/" style={{whiteSpace: 'nowrap'}}>ABOUT US</Link>
  </div>
  <div>
    <Link to="/services/" style={{whiteSpace: 'nowrap'}}>SERVICES</Link>
  </div>
  <div>
    <Link to="/news/" style={{whiteSpace: 'nowrap'}}>NEWS</Link>
  </div>
  <div>
    <Link to="/locations/" style={{whiteSpace: 'nowrap'}}>LOCATIONS</Link>
  </div>
  <div>
    <Link to="/contact/" style={{whiteSpace: 'nowrap'}}>CONTACT</Link>
  </div>
</div>
);
