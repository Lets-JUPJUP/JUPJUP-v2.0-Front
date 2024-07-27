import React from "react";
import styled from "styled-components";
import message from "../../../assets/mypage/message.svg";
import bookmark from "../../../assets/mypage/bookmark.svg";
import calendar from "../../../assets/mypage/calendar.svg";

const Btns = () => {
  return (
    <Wrapper>
      <div className="btn">
        <img src={message} />
        댓글 단 글
      </div>

      <div className="btn">
        <img src={bookmark} />
        북마크
      </div>

      <div className="btn">
        <img src={calendar} />내 플로깅
      </div>
    </Wrapper>
  );
};

export default Btns;

const Wrapper = styled.div`
  padding: 12px 12px 14px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn {
    font-size: 16px;
    font-weight: 600;
    display: flex;
    gap: 2px;
  }
`;
