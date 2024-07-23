import React from "react";
import profile from "../../assets/mypage/profile.svg";
import settings from "../../assets/mypage/settings.svg";
import styled from "styled-components";

const Info = () => {
  return (
    <Wrapper>
      <div className="section">
        <img src={profile} />
        <div className="nickname">닉네임</div>
        <div className="age-sex">00세, 여성</div>
      </div>

      <div className="section">
        <div className="logout">로그아웃</div>
        <img className="settings" src={settings} />
      </div>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.div`
  display: flex;
  padding: 12px 0px;
  justify-content: space-between;

  .section {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .nickname {
    font-size: 16px;
    font-weight: 600;
  }

  .age-sex {
    color: var(--grey500);
  }

  .logout {
    height: 25px;
    padding: 4px 10px;
    box-sizing: border-box;
    border-radius: 4px;
    background: var(--grey300);
    text-align: center;

    color: var(--grey500);
    font-size: 12px;
  }

  .settings {
    width: 25px;
    height: 25px;
  }
`;
