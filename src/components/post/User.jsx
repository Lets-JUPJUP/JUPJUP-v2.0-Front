import React from "react";
import styled from "styled-components";
import profile from "../../assets/post/profile.svg";
import right from "../../assets/post/right.svg";
import { handleDateString } from "../../services/format/date";

const User = ({
  authorId,
  authorNickname,
  authorProfileImageUrl,
  createdAt,
}) => {
  return (
    <Wrapper>
      <div className="left">
        <img
          className="profile"
          src={authorProfileImageUrl ? authorProfileImageUrl : profile}
        />
        <div className="col">
          <div className="nickname">{authorNickname}</div>
          <div className="date">{handleDateString(createdAt)}</div>
        </div>
      </div>

      <div className="btn" onClick={`/user/${authorId}`}>
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

  .profile {
    width: 40px;
    height: 40px;
    border-radius: 4px;
  }

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
