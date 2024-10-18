import React from "react";
import styled from "styled-components";
import letsjupjup from "../../assets/main/letsjupjup.svg";
import mainview from "../../assets/main/mainview.png";
import bell from "../../assets/main/bell.svg";
import banner from "../../assets/main/banner.png";
import chatbot from "../../assets/main/chatbot.svg";
import NavBar from "../../components/common/NavBar";
import LongBtn from "../../components/common/LongBtn";
import { useNavigate } from "react-router-dom";
import useGetInitialData from "../../services/hooks/useGetInitialData";
import { notiGetSubscribe } from "../../services/api/noti";

const MainPage = () => {
  const navigate = useNavigate();

  //메인페이지 공용헤더 사용 X
  //SSE 알림 구독
  useGetInitialData(notiGetSubscribe);

  return (
    <Wrapper>
      <div className="header">
        <img src={letsjupjup} alt="letsjupjup" />
        <img
          src={bell}
          className="bell"
          alt="bell"
          onClick={() => navigate("mypage/noti")}
        />
      </div>
      <img src={mainview} className="mainview" alt="mainview" />

      <Recommend>
        <div className="section">
          <div className="title">이달의 추천 코스</div>
          <img
            className="chatbot"
            alt="chatbot"
            src={chatbot}
            onClick={() => navigate("/chatbot")}
          />
        </div>

        <img className="banner" alt="banner" src={banner} />
      </Recommend>

      <div className="btn">
        <LongBtn
          text={"플로깅하기"}
          isActive={true}
          onClick={() => navigate("/list")}
        />
      </div>

      <NavBar />
    </Wrapper>
  );
};

export default MainPage;

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

  .bell {
    position: absolute;
    right: 20px;
    cursor: pointer;
  }

  .mainview {
    margin-top: 28px;
  }

  .btn {
    margin: 20px auto 0px;
  }
`;

const Recommend = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 36px;

  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      color: var(--black);

      font-size: 18px;
      font-weight: 600;
    }

    .chatbot {
      cursor: pointer;
    }
  }
`;
