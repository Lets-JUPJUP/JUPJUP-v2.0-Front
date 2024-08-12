import React from "react";
import styled from "styled-components";

const Pic = ({ images }) => {
  return (
    <Wrapper>
      {images.map((el) => {
        return (
          <Square>
            <img src={el} className="square-image" />
          </Square>
        );
      })}
    </Wrapper>
  );
};

export default Pic;

const Square = styled.div`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
