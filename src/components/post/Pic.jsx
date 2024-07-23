import React from "react";
import styled from "styled-components";

const Pic = () => {
  return (
    <Wrapper>
      <img src={"src"} className="square-image" />
    </Wrapper>
  );
};

export default Pic;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 8px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
`;
