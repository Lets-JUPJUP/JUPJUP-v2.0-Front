import React from "react";
import styled from "styled-components";

import thumbs from "../../assets/mypage/thumbs.svg";
import star from "../../assets/mypage/star.svg";
import count from "../../assets/mypage/count.svg";

const Stat = () => {
  return (
    <Wrapper>
      <div className="section">
        <img className="icon" src={thumbs} />
        <div className="name">좋아요</div>
        <div className="num">15</div>
      </div>

      <div className="section">
        <img className="icon" src={count} />
        <div className="name">플로깅 횟수</div>
        <div className="num">15</div>
      </div>

      <div className="section">
        <img className="icon" src={star} />
        <div className="name">플로깅 평점</div>
        <div className="num">4.2</div>
      </div>
    </Wrapper>
  );
};

export default Stat;

const Wrapper = styled.div`
  display: flex;
  padding: 12px 25px;
  justify-content: space-between;

  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .num {
    color: var(--black);
    font-size: 16px;
    font-weight: 600;
  }

  .name {
    color: var(--black);
    text-align: center;
  }

  .icon {
    height: 52px;
  }
`;
