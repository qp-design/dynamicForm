import React, { memo } from "react";

const Logo = memo(() => {
  return <div style={{
    float: 'left',
    width: 120,
    height: 31,
    margin: '16px 24px 16px 0',
    background: 'rgba(255, 255, 255, 0.3)'
  }} />;
});
export default Logo;
