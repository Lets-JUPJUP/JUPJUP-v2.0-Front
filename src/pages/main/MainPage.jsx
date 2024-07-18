import React from "react";
import styled from "styled-components";
import letsjupjup from "../../assets/main/letsjupjup.svg";
import mainview from "../../assets/main/mainview.svg";
import bell from "../../assets/main/bell.svg";
import banner from "../../assets/main/banner.svg";
import NavBar from "../../components/common/NavBar";
import LongBtn from "../../components/common/LongBtn";

const MainPage = () => {
  return (
    <Wrapper>
      <div className="header">
        <img src={letsjupjup} />
        <img src={bell} className="bell" />
      </div>
      <img src={mainview} className="mainview" />

      <Recommend>
        <div class="title">이달의 추천 코스</div>
        <img className="banner" src={banner} />
      </Recommend>

      <div className="btn">
        <LongBtn text={"플로깅하기"} />
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

  .title {
    color: var(--black);

    font-size: 18px;
    font-weight: 600;
  }
`;
