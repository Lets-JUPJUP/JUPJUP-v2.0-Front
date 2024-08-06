import React from "react";
import styled from "styled-components";
import noti from "../../../assets/icons/noti.svg";
import { handleDateString } from "../../../services/format/date";

const NotiItem = ({ notiItem, onClick }) => {
  const { content, contentId, id, isRead, notificationType, time } = notiItem;
  return (
    <Wrapper onClick={onClick}>
      <div className="top">
        <div className="left">
          <img className="icon" src={noti} />
          <div className="title">플로깅 성사 여부 확인하기</div>
        </div>

        <div className="date">{handleDateString(time)}</div>
      </div>

      <div className="bottom">{content}</div>
    </Wrapper>
  );
};

export default NotiItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .icon {
    width: 20px;
    height: 20px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .date {
    font-size: 12px;
  }

  .top {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      gap: 8px;
    }
  }

  .bottom {
    padding-left: 28px;
  }
`;
