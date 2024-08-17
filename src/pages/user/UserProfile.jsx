import React from "react";
import styled from "styled-components";
import Stat from "../../components/user/mypage/Stat";
import Header from "../../components/common/Header";
import profile from "../../assets/auth/profile.svg";

const UserProfile = () => {
  return (
    <>
      <Header title="유저 프로필" isBack={true} isAlert={true} />
      <Wrapper>
        <Form>
          <div>
            <img src={profile} />
          </div>

          <div className="infos">
            <Info>닉네임</Info>
            <Info>NN세</Info>
            <Info>여성</Info>
          </div>
        </Form>

        <Bottom>
          <div className="stat">통계</div>
          <div className="container">
            <Stat />
          </div>
        </Bottom>
      </Wrapper>
    </>
  );
};

export default UserProfile;

const Wrapper = styled.div`
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
  bottom: 40px;
`;
