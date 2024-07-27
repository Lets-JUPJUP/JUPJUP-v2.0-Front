import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import Item from "../../components/list/Item";
import Stars from "../../components/user/review/Stars";
import Participant from "../../components/user/review/Participant";
import LongBtn from "../../components/common/LongBtn";
import NavBar from "../../components/common/NavBar";

const ReviewPage = () => {
  return (
    <>
      <Header title="리뷰하기" isBack={true} isNoti={true} />
      <Wrapper>
        <div className="border-box">
          <Item />
        </div>

        <div className="gap">
          <Stars />
        </div>

        <div className="reivew-text">함께한 플로거 리뷰하기</div>
        <div className="sub-text">
          함께해서 즐거웠던 플로거에게 좋아요를 눌러주세요
        </div>
        <div className="divider" />

        <div className="participants">
          <Participant />
          <Participant />
          <Participant />
          <Participant />
          <Participant />
        </div>
      </Wrapper>

      <Btn>
        <LongBtn text={"완료"} />
      </Btn>

      <NavBar />
    </>
  );
};

export default ReviewPage;

const Wrapper = styled.div`
  padding: 0px 20px;

  .border-box {
    margin-top: 40px;

    align-items: center;

    border-top: 1.2px solid var(--grey300);
    border-bottom: 1.2px solid var(--grey300);
  }

  .gap {
    margin-top: 40px;
  }

  .reivew-text {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    margin-top: 120px;
  }

  .sub-text {
    text-align: center;
    margin-top: 4px;
    font-size: 12px;
  }

  .divider {
    margin-top: 8px;
    width: 100%;
    background: var(--grey300);
    height: 1.2px;
  }

  .participants {
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const Btn = styled.div`
  margin-top: 60px;
`;
