import React from "react";
import styled from "styled-components";
import noti from "../../../assets/icons/noti.svg";
import { handleDateString } from "../../../services/format/date";
import { notiPostReadEach } from "../../../services/api/noti";
import useFetch from "../../../services/hooks/useFetch";
import { useNavigate } from "react-router-dom";

const NotiItem = ({ notiItem }) => {
  const { content, contentId, id, isRead, notificationType, time } = notiItem;

  //알림 단일 읽음
  const { fetchData: readEach } = useFetch(notiPostReadEach);

  const navigate = useNavigate();

  //알림 타입별 제목 설정
  var title = "";
  if (notificationType == "PLOGGING") {
    title = "플로깅 성사 여부 확인하기";
  } else if (notificationType == "COMMENT") {
    title = "댓글 확인하기";
  } else if (notificationType == "REPLY") {
    title = "대댓글 확인하기";
  }

  return (
    <Wrapper
      $isRead={isRead}
      onClick={() => {
        readEach(id);
        navigate(`/detail/${contentId}`);
      }}
    >
      <div className="top">
        <div className="left">
          <img className="icon" src={noti} />
          <div className="title">{title}</div>
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
  color: ${(prop) => (prop.$isRead ? "var(--grey500)" : "var(--black)")};

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
