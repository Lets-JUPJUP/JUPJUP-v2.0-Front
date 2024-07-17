import React from "react";
import Header from "../../components/common/Header";
import profile from "../../assets/auth/profile.svg";
import Input from "../../components/common/Input";
import LongBtn from "../../components/common/LongBtn";
import styled from "styled-components";

const RegisterPage = () => {
  return (
    <div>
      <Header title="프로필 생성" isBack={true} />

      <Form>
        <div>
          <img src={profile} class="my-16" />
        </div>

        <Inputs>
          <Input placeholder="닉네임" />
          <Input placeholder="NN 세" />
          여성/남성
        </Inputs>
      </Form>
      <Bottom>
        <LongBtn text="완료" />
      </Bottom>
    </div>
  );
};

export default RegisterPage;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 60px;
  align-items: center;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
