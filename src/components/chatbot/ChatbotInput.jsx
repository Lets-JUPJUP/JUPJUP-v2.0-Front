import React, { useEffect, useState } from "react";
import styled from "styled-components";
import chat_send_grey from "../../assets/chatbot/chat_send_grey.svg";
import chat_send from "../../assets/chatbot/chat_send.svg";
import { placeholderList } from "../../services/format/chatbotData";

const ChatbotInput = ({ curStep, chatList, chatListDispatch, assiRender, setAssiRender }) => {
  const maxChatLength = 50; // 최대 글자 수
  const [chatInput, setChatInput] = useState(""); // input 내용 state
  const [curPlaceholder, setCurPlaceholder] = useState(
    "ex) 연희동 근처 플로깅 루트를 추천해줘."
  ); // 현재 placeholder

  // input onChange 함수
  const handleChange = (e) => {
    setChatInput(e.target.value);
  };

  // props로 받아야 할 것 : 현재 사용자가 선택한 상태 (basic인지, place, time, etc인지)

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
  const handleSubmit = () => {

    // BASIC일 때
    chatListDispatch({ type: "user_BASIC", content: chatInput, detail: null }); // action으로 BASIC_USER(0), chatInput, detail 배열 전달

    // WHERE || TIME || ETC일 때
    // detail 배열에 {type: "WHERE", content: "홍제천을 플로깅 루트에 포함해줘"} 같은 형식 추가

    setChatInput(""); // input state 초기화
  };


  return (
    <Wrapper>
      <div className="inputHeight" />
      <Container>
        <Input
          value={chatInput}
          placeholder={curPlaceholder}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
        />
        <div className="rightSection">
          <div
            className={
              chatInput.length > maxChatLength ? "charNumMax" : "charNum"
            }
          >
            {chatInput.length}/{maxChatLength}
          </div>
          {chatInput.length > 0 ? (
            <img src={chat_send} alt="chat_send" onClick={handleSubmit} />
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

const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;

  ::placeholder {
    font-size: 14px;
    color: var(--grey500);
  }
`;
