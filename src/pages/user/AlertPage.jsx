import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import LongBtn from "../../components/common/LongBtn";
import AddPics from "../../components/common/AddPics";

const AlertPage = () => {
  return (
    <>
      <Header title="신고 및 제보" isBack={true} />
      <Wrapper>
        <textarea className="text" placeholder="문제 상황에 대해 작성하세요." />

        <div className="gap">
          <AddPics />
        </div>
      </Wrapper>

      <Bottom>
        <LongBtn text={"완료"} />
      </Bottom>
    </>
  );
};

export default AlertPage;

const Wrapper = styled.div`
  padding: 0 20px;

  .gap {
    margin-top: 40px;
  }

  .text {
    margin-top: 40px;
    height: 280px;
    overflow-y: scroll;
    border-radius: var(--basic, 2px);
    background: var(--grey100, #eef0f3);
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 8px 10px;
    align-items: center;

    outline: none;
    border: none;
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
