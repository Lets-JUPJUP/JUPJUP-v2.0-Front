import React from "react";
import styled from "styled-components";
import right from "../../assets/post/right.svg";
import Comment from "./Comment";

const Comments = () => {
  return (
    <Wrapper>
      <Top>
        <div className="title">댓글 (00)</div>
        <div className="btn">
          댓글 작성하기
          <img src={right} />
        </div>
      </Top>

      <Comment />
      <div className="divider" />

      <Comment isMine={true} />
      <Recomment>
        <Comment />
      </Recomment>
      <Recomment>
        <Comment />
      </Recomment>
      <div className="divider" />

      <Comment />
    </Wrapper>
  );
};

export default Comments;

const Top = styled.div`
  width: 100%;
  padding: 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.2px solid var(--grey500);

  .title {
    color: var(--black);
    font-size: 16px;
    font-weight: 600;
  }

  .btn {
    color: var(--grey500);
    display: flex;
    gap: 8px;

    img {
      margin-top: 1px;
    }
  }
`;

const Wrapper = styled.div`
  padding-bottom: 16px;

  .divider {
    height: 0.4px;
    background-color: var(--grey500);
  }
`;

const Recomment = styled.div`
  padding-left: 30px;
`;
