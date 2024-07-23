import React from "react";
import styled from "styled-components";
import profile from "../../assets/post/profile.svg";
import right from "../../assets/post/right.svg";

const User = () => {
  return (
    <Wrapper>
      <div className="left">
        <img src={profile} />
        <div className="col">
          <div className="nickname">사용자</div>
          <div className="date">00/00 00:00</div>
        </div>
      </div>

      <div className="btn">
        프로필 보기
        <img src={right} />
      </div>
    </Wrapper>
  );
};

export default User;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    gap: 8px;
  }

  .col {
    display: flex;
    flex-direction: column;
  }

  .nickname {
    color: var(--black);
    font-size: 16px;
    font-weight: 600;
  }

  .date {
    font-size: 12px;
    color: var(--grey500);
  }

  .btn {
    display: flex;
    gap: 8px;
    color: var(--grey500);
    align-items: start;

    img {
      margin-top: 4px;
    }
  }
`;
