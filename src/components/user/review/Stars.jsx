import React from "react";
import styled from "styled-components";
import star from "../../../assets/icons/star.svg";
import starfill from "../../../assets/icons/starfill.svg";

const Stars = () => {
  return (
    <Wrapper>
      <div className="stars">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>

      <div className="num">4.0/5.0</div>
    </Wrapper>
  );
};

export default Stars;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;

  .stars {
    display: flex;
    gap: 12px;

    img {
      width: 32px;
    }
  }

  .num {
    font-size: 16px;
    font-weight: 600;
  }
`;
