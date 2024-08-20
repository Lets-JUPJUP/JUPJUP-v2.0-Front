import React from "react";
import styled from "styled-components";
import star from "../../../assets/icons/star.svg";
import starfill from "../../../assets/icons/starfill.svg";

const Stars = ({ stars = 0, setStars }) => {
  const totalStars = 5;

  return (
    <Wrapper>
      <div className="stars">
        {Array.from({ length: totalStars }).map((_, index) => (
          <img
            key={index}
            src={index < stars ? starfill : star}
            alt={index < stars ? "filled star" : "empty star"}
            onClick={() => setStars(index + 1)}
          />
        ))}
      </div>

      <div className="num">{stars}.0/5.0</div>
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
