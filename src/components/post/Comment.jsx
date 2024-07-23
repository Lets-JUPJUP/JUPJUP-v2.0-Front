import React from "react";
import styled from "styled-components";

import profile from "../../assets/post/profile.svg";
import comment from "../../assets/post/comment.svg";
import alert from "../../assets/post/alert.svg";
import x from "../../assets/post/x.svg";

const Comment = ({ isMine = false }) => {
  return (
    <Wrapper>
      <div className="top">
        <div className="left">
          <img className="profile" src={profile} />
          {isMine ? (
            <div className="nickname mine">닉네임</div>
          ) : (
            <div className="nickname">닉네임</div>
          )}

          <div className="date">00/00 00:00</div>
        </div>
        <div className="icons">
          {isMine ? (
            <img src={x} />
          ) : (
            <>
              <img src={alert} /> <img src={comment} />
            </>
          )}
        </div>
      </div>

      <p className="content">오 좋은 행사네요 전 신청했습니다~</p>
    </Wrapper>
  );
};

export default Comment;

const Wrapper = styled.div`
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .top {
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: space-between;
    flex-shrink: 0;
    color: var(--grey500);
    font-size: 12px;
  }

  .left {
    display: flex;
    gap: 4px;
  }

  .profile {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-right: 4px;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .content {
    margin-left: 28px;
  }

  .mine {
    color: var(--main);
  }
`;
