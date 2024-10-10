import React from "react";
import styled from "styled-components";
import letsjupjup from "../../assets/main/letsjupjup.svg";
import back_black from "../../assets/icons/back_black.svg";
import { useNavigate } from "react-router-dom";

const ChatbotPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="header">
        <img
          src={back_black}
          className="back"
          alt="back"
          onClick={() => navigate(-1)}
        />
        <img src={letsjupjup} alt="letsjupjup" />
      </div>
      <div>챗봇페이지</div>
    </Wrapper>
  );
};

export default ChatbotPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .header {
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .back {
    position: absolute;
    left: 20px;
    cursor: pointer;
  }
`;
