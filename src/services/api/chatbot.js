import axios from "axios";
import { client } from "./client";
import { handleDateFormat } from "../format/date";

// chatgpt API에 질문하고 답변 받기
export const chatbotCallGPT = async (chatList) => {
  console.log("call GPT");
  return axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant. Your name is Julie, and you have to answer within 400 characters maximum in Korean.",
        },
        ...chatList,
      ],
      temperature: 0.5,
      max_tokens: 400,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_GPT_API_KEY}`,
      },
    }
  );
};

// 채팅 저장하기
export const chatbotPostSaveChat = async (chatData) => {
  const body = {
    ...chatData,  // 기존 객체 복사
    role: chatData.role.toUpperCase(),  // role 값을 대문자로 변환
    message: chatData.content,
    timestamp: handleDateFormat(chatData.timestamp),  // timestamp를 포맷팅
  };
  delete body.content;
  return client.post("/api/v1/chats", body);
};

// 채팅 조회하기
export const chatbotGetChats = () => {
  return client.get(`/api/v1/chats`);
};

// 채팅 초기화하기
