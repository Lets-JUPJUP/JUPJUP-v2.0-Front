import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Input from "../../components/common/Input";
import LongBtn from "../../components/common/LongBtn";
import profile from "../../assets/auth/profile.svg";
import Select from "../../components/common/Select";
import NavBar from "../../components/common/NavBar";

const EditPage = () => {
  return (
    <>
      <Header isBack={true} title="정보 수정" />
      <Wrapper>
        <Form>
          <div>
            <img src={profile} class="my-16" />
          </div>

          <Inputs>
            <Input placeholder="닉네임" />
            <Input placeholder="NN 세" />
            <Select isActive={false} />
            <div className="comment">성별 정보는 수정할 수 없습니다.</div>
          </Inputs>

          <div className="quit">회원탈퇴</div>
        </Form>

        <Bottom>
          <LongBtn text="완료" isActive={false} />
        </Bottom>
      </Wrapper>

      <NavBar />
    </>
  );
};

export default EditPage;

const Wrapper = styled.div`
  .quit {
    display: flex;
    padding: 4px 10px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: var(--grey300);
    color: var(--grey500);
    text-align: center;
    font-size: 12px;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 60px;
  align-items: center;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;

  .comment {
    color: var(--grey500);
    text-align: center;

    font-size: 12px;
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 97px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
