import React, { useEffect, useReducer, useRef, useState } from "react";
import styled, { css } from "styled-components";
import letsjupjup from "../../assets/main/letsjupjup.svg";
import back_black from "../../assets/icons/back_black.svg";
import julie from "../../assets/chatbot/julie.svg";
import { useNavigate } from "react-router-dom";
import ChatInput from "../../components/chatbot/ChatbotInput";
import ChatbotProfile from "../../components/chatbot/ChatbotProfile";
import {
  chatListInitialState,
  chatListReducer,
} from "../../services/format/chatbotData";
import { chatbotCallGPT } from "../../services/api/chatbot";

const ChatbotPage = () => {
  const navigate = useNavigate();
  const [curStep, setCurStep] = useState("BASIC"); // 현재 단계 state (basic, where, time, etc)

  // 세부 렌더링 단계 (추가 질문 컴포넌트, 마무리 멘트)
  const [assiRender, setAssiRender] = useState([false, false]);

  const [chatList, chatListDispatch] = useReducer(
    chatListReducer,
    chatListInitialState
  ); // 메세지 대화 목록

  const [extraBtnState, setExtraBtnState] = useState([false, false, false]); // 추가 질문 버튼 3개 state
  // 추가 질문 리스트 -> 각 카테고리 별로 마지막 것만 추려서 gpt에 전달
  const [detail, setDetail] = useState([]); // 추가 질문 배열 {type: "WHERE", content: "~"}

  const scrollRef = useRef();
  useEffect(() => {
    // 현재 스크롤 위치 === scrollRef.current.scrollTop
    // 스크롤 길이 === scrollRef.current.scrollHeight
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatList.length]);

  // 추가 질문 컴포넌트 버튼 클릭 시 실행되는 함수
  const handleExtraBtnClick = (type, id) => {
    setCurStep(type); // 현재 단계를 바꿔줌
    // 버튼 state 업데이트 -> id에 해당하는 값만 true, 나머지는 false 처리
    const updatedState = [...extraBtnState].map((_, index) => {
      return index === id ? true : false; // id와 같은 index만 true로 설정
    });
    setExtraBtnState(updatedState);
  };

  // DoneBtn 클릭 시 실행되는 함수
  // dispatch 함수로 detail 배열 넣으면, 
  // reducer 함수에서 내용 가공해서(각 카테고리 별 마지막 요소만 골라서 텍스트 처리), chatList에 추가

  // chatList가 업데이트된 후에 GPT API 호출
  useEffect(() => {
    if (chatList.length === 1 || chatList.length === 3) {
      const { role, content } = chatList[0]; // 첫 번째 요소 가져오기
      const dataArray = [{ role, content }];

      const fetchData = async () => {
        try {
          const res = await chatbotCallGPT(dataArray); // gpt에게 질문 보내기
          console.log(res.data.choices[0].message.content); // 답변 받으면 콘솔 출력
          chatListDispatch({ type: "assistant_BASIC", content: res.data.choices[0].message.content, detail: null });

          let copy = [...assiRender];
          copy[0] = true;
          setAssiRender(copy);
        } catch {
          alert("잠시 후 다시 시도해주세요");
        }
      };
      // length가 2와 4일 때는 채팅 저장 호출
      fetchData(); // GPT API 호출
    }
  }, [chatList]); // chatList가 변경될 때마다 실행

  return (
    <Wrapper>
      <Header>
        <div className="header">
          <img
            src={back_black}
            className="back"
            alt="back"
            onClick={() => navigate(-1)}
          />
          <img src={letsjupjup} alt="letsjupjup" />
        </div>
        <div className="headerHeight" />
      </Header>

      <Chat ref={scrollRef}>
        <Introduction>
          <img src={julie} alt="julie" />
          <div className="title">챗봇 줄리</div>
          <div>
            <div className="desc">
              챗봇이 부정확한 정보를 제공하는 실수를 할 수 있습니다.
            </div>
            <div className="desc">중요한 정보는 별도의 확인을 거쳐주세요.</div>
          </div>
        </Introduction>

        <AssiMessageBox>
          <ChatbotProfile chatList={chatList} id={0} />
          <AssiBubble>안녕하세요 AI 챗봇 줄리에요.</AssiBubble>
          <AssiBubble>어느 지역을 중심으로 플로깅하고 싶으신가요?</AssiBubble>
        </AssiMessageBox>

        {chatList[0] && chatList[0].content && (
          <UserMessageBox>
            <UserBubble>{chatList[0].content}</UserBubble>
          </UserMessageBox>
        )}

        {chatList[0] &&
          (chatList[1] && chatList[1].content ? (
            <AssiMessageBox>
              <ChatbotProfile chatList={chatList} id={1} />
              <AssiBubble>{chatList[1].content}</AssiBubble>
            </AssiMessageBox>
          ) : (
            <AssiMessageBox>
              <ChatbotProfile />
              <AssiBubble>로딩 중...</AssiBubble>
            </AssiMessageBox>
          ))}

        {assiRender[0] && (
          <AssiMessageBox>
            <AssiBubble>
              <div>
                더 자세한 추천을 원하시나요? 질문 후 ‘다시 물어보기’로
                물어봐주세요!
              </div>
              <BtnBox>
                <OptionBtn
                  $isActive={extraBtnState[0]}
                  onClick={() => {
                    handleExtraBtnClick("WHERE", 0);
                  }}
                >
                  특정 장소 포함하기
                </OptionBtn>
                <OptionBtn
                  $isActive={extraBtnState[1]}
                  onClick={() => {
                    handleExtraBtnClick("TIME", 1);
                  }}
                >
                  소요 시간 지정하기
                </OptionBtn>
                <OptionBtn
                  $isActive={extraBtnState[2]}
                  onClick={() => {
                    handleExtraBtnClick("ETC", 2);
                  }}
                >
                  기타 정보 질문하기
                </OptionBtn>
              </BtnBox>
              <div>
                <DoneBtn>다시 물어보기</DoneBtn>
              </div>
            </AssiBubble>
          </AssiMessageBox>
        )}
      </Chat>

      <ChatInput
        curStep={curStep}
        chatList={chatList}
        chatListDispatch={chatListDispatch}
        assiRender={assiRender}
        setAssiRender={setAssiRender}
      />
    </Wrapper>
  );
};

export default ChatbotPage;

const headerHeight = 60;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  .header {
    box-sizing: border-box;
    width: 100%;
    max-width: 700px;
    height: ${headerHeight}px;
    padding: 0 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: var(--white);
  }

  .headerHeight {
    height: ${headerHeight}px;
  }

  .back {
    position: absolute;
    left: 20px;
    cursor: pointer;
  }
`;

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  margin: 28px 0;
  padding: 0 20px;

  .title {
    color: var(--black);
    font-size: 18px;
    font-weight: 600;
  }

  .desc {
    color: var(--grey500);
    font-size: 12px;
    text-align: center;
  }
`;

const Chat = styled.div`
  padding: 0 20px;
  margin-bottom: 32px;

  flex-grow: 1; // Chat 컴포넌트가 빈 공간을 채우도록 설정
  overflow-y: auto; // 내용이 넘칠 때 스크롤 생성
  max-height: calc(
    100vh - ${headerHeight}px - 48px
  ); // Header와 Input 사이의 공간 계산
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 32px;
`;

const AssiMessageBox = styled(MessageBox)`
  align-items: flex-start;
`;

const UserMessageBox = styled(MessageBox)`
  align-items: flex-end;
`;

// 말풍선
const Bubble = styled.div`
  box-sizing: border-box;
  max-width: 240px;
  padding: 8px 12px;

  border-radius: 8px;
  color: var(--black);

  word-break: keep-all;
  overflow-wrap: break-word;
`;

const AssiBubble = styled(Bubble)`
  background: var(--grey100);

  display: flex;
  flex-direction: column;
  gap: 20px;

  white-space: pre-wrap;
`;

const UserBubble = styled(Bubble)`
  background: var(--light);
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ExtraBtn = styled.div`
  box-sizing: border-box;
  padding: 8px 10px;
  text-align: center;
  border-radius: 4px;

  font-weight: 700;
`;

const OptionBtn = styled(ExtraBtn)`
  ${(props) =>
    props.$isActive
      ? css`
          border: 2px solid var(--main);
          background: var(--light);
          color: var(--main);
        `
      : css`
          background: var(--white);
          color: var(--black);
        `}
`;

const DoneBtn = styled(ExtraBtn)`
  background: var(--main);
  color: var(--white);
`;
