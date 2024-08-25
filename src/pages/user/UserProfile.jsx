import React from "react";
import styled from "styled-components";
import Stat from "../../components/user/mypage/Stat";
import Header from "../../components/common/Header";
import profile from "../../assets/auth/profile.svg";
import useGetInitialData from "../../services/hooks/useGetInitialData";
import {
  memberGetUserProfile,
  memberGetUserStat,
} from "../../services/api/member";
import { useParams } from "react-router-dom";
import { getKorGender } from "../../services/translate/gender";

const UserProfile = () => {
  const { id } = useParams();
  const { data: profile } = useGetInitialData(memberGetUserProfile, id);
  const { data: stat } = useGetInitialData(memberGetUserStat, id);

  return (
    <>
      <Header
        title="유저 프로필"
        isBack={true}
        isAlert={true}
        idForAlert={id}
      />
      <Wrapper>
        {profile && (
          <Form>
            <div>
              <img
                className="profile"
                src={profile?.profileImageUrl || profile}
              />
            </div>

            <div className="infos">
              <Info>{profile?.nickname}</Info>
              <Info>{profile?.age}세</Info>
              <Info>{getKorGender(profile?.gender)}</Info>
            </div>
          </Form>
        )}

        <Bottom>
          <div className="stat">통계</div>
          <div className="container">{stat && <Stat stat={stat} />}</div>
        </Bottom>
      </Wrapper>
    </>
  );
};

export default UserProfile;

const Wrapper = styled.div`
  padding: 0 20px;
  position: relative;
  height: calc(100vh - 109px);

  .stat {
    text-align: center;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
  }

  .container {
    align-items: center;

    border-top: 1.2px solid var(--grey300);
    border-bottom: 1.2px solid var(--grey300);
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;
  align-items: center;

  .infos {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 280px;
  }

  .profile {
    width: 160px;
    height: 160px;
    border-radius: 4px;
  }
`;

const Info = styled.div`
  height: 36px;
  box-sizing: border-box;
  padding: 8px 10px;
  background-color: var(--grey100);
  border-radius: 2px;
  text-align: center;
`;

const Bottom = styled.div`
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  left: 0;
  bottom: 0px;
`;
