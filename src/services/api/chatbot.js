import axios from "axios";

// chatgpt API에 질문하고 답변 받기
export const chatbotCallGPT = async (chatList) => {
  console.log("call GPT");
  return axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: chatList,
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

// 채팅 조회하기

// 채팅 초기화하기