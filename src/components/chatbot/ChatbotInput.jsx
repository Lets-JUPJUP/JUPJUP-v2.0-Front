import React, { useEffect, useState } from "react";
import styled from "styled-components";
import chat_send_grey from "../../assets/chatbot/chat_send_grey.svg";
import chat_send from "../../assets/chatbot/chat_send.svg";

const ChatbotInput = ({ curStep }) => {
  const maxChatLength = 50; // 최대 글자 수
  const [chat, setChat] = useState(""); // input 내용 state
  const [curPlaceholder, setCurPlaceholder] = useState(
    "ex) 연희동 근처 플로깅 루트를 추천해줘."
  ); // 현재 placeholder

  // input onChange 함수
  const handleChange = (e) => {
    setChat(e.target.value);
  };

  // props로 받아야 할 것 : 현재 사용자가 선택한 상태 (basic인지, place, time, etc인지)
  const placeholderList = [
    { type: "basic", placeholder: "ex) 연희동 근처 플로깅 루트를 추천해줘." },
    { type: "where", placeholder: "ex) 홍제폭포를 플로깅 루트에 포함해줘." },
    { type: "time", placeholder: "ex) 2시간 이내 루트를 추천해줘." },
    { type: "etc", placeholder: "ex) 오르막이 없는 평지로 추천해줘." },
  ];

  useEffect(() => {
    // curStep에 맞는 placeholder를 찾아서 state를 업데이트
    const matched = placeholderList.find((item) => item.type === curStep);
    if (matched) {
      setCurPlaceholder(matched.placeholder);
    } else {
      setCurPlaceholder(placeholderList[0].placeholder); // curStep에 해당하는 값이 없을 때
    }
  }, [curStep]); // curStep이 변경될 때마다 실행

  // chatgpt 제출 함수
  const handleSubmit = () => {};

  return (
    <Wrapper>
      <div className="inputHeight" />
      <Container>
        <ChatInput placeholder={curPlaceholder} onChange={handleChange} />
        <div className="rightSection">
          <div
            className={chat.length > maxChatLength ? "charNumMax" : "charNum"}
          >
            {chat.length}/{maxChatLength}
          </div>
          {chat.length > 0 ? (
            <img src={chat_send} alt="chat_send" />
          ) : (
            <img src={chat_send_grey} alt="chat_send" />
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

export default ChatbotInput;

const inputHeight = 48;

const Wrapper = styled.div`
  .inputHeight {
    height: ${inputHeight}px;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 700px;
  height: ${inputHeight}px;
  background-color: var(--white);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.04),
    0px -2px 20px 0px rgba(0, 0, 0, 0.06);
  padding: 8px 20px;
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  gap: 12px;

  .rightSection {
    display: flex;
    align-items: center;
    gap: 12px;

    .charNum {
      font-size: 12px;
      color: var(--grey500);
    }

    .charNumMax {
      color: #ff1c1f;
    }
  }
`;

const ChatInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;

  ::placeholder {
    font-size: 14px;
    color: var(--grey500);
  }
`;
