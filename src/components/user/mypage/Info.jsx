import React from "react";
import profile from "../../../assets/mypage/profile.svg";
import settings from "../../../assets/mypage/settings.svg";
import styled from "styled-components";
import useGetInitialData from "../../../services/hooks/useGetInitialData";
import { memberGetMyProfile } from "../../../services/api/member";
import { getKorGender } from "../../../services/translate/gender";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const { data } = useGetInitialData(memberGetMyProfile);

  const navigate = useNavigate();
  return (
    data && (
      <Wrapper>
        <div className="section">
          <img src={data.profileImageUrl || profile} className="profile" />
          <div className="nickname">{data.nickname}</div>
          <div className="age-sex">
            {data.age}세, {getKorGender(data.gender)}
          </div>
        </div>

        <div className="section">
          <div className="logout">로그아웃</div>
          <img
            className="settings"
            src={settings}
            onClick={() => navigate("/mypage/edit")}
          />
        </div>
      </Wrapper>
    )
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

  .profile {
    width: 40px;
    height: 40px;
    border-radius: 4px;
  }
`;
