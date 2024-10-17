import React from "react";
import styled from "styled-components";
import julie from "../../assets/chatbot/julie.svg";

const ChatbotProfile = ({ chatList, id }) => {
  // chatList[id].timestamp가 없을 경우에만 현재 날짜와 시간 가져오기
  const currentDate =
    chatList && chatList[id]?.timestamp
      ? chatList[id].timestamp
      : new Date();

  // 각 구성 요소 가져오기
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  return (
    <Wrapper>
      <img src={julie} alt="julie" className="julie" />
      <div className="info">줄리</div>
      <div className="info">
        {month}/{day} {hours}:{String(minutes).padStart(2, '0')}
      </div>
    </Wrapper>
  );
};

export default ChatbotProfile;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .julie {
    width: 36px;
  }

  .info {
    font-size: 12px;
    color: var(--grey500);
  }
`;
