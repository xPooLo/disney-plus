import React from "react";
import styled from "styled-components";

export const Watermark = () => {
  return (
    <WatermarkContainer>
      <Logo>
        <h1>paul.dev</h1>
      </Logo>
    </WatermarkContainer>
  );
};

const WatermarkContainer = styled.div`
  position: fixed;
  z-index: 99999999;

  top: 50%;
  bottom: 50%;
  left: 45%;
  right: 50%;
`;

const Logo = styled.div`
  color: #fff;

  h1 {
    opacity: 0.3;
  }
`;

export default Watermark;
