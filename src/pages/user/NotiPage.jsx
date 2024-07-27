import React from "react";
import styled from "styled-components";
import Header from "../../components/common/Header";
import NotiItem from "../../components/user/noti/NotiItem";
import ReadBtn from "../../components/user/noti/ReadBtn";

const NotiPage = () => {
  return (
    <>
      <Header isBack={true} title="알림" />
      <Wrapper>
        <div className="list">
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
          <NotiItem />
        </div>

        <div className="floating-btn">
          <ReadBtn />
        </div>
      </Wrapper>
    </>
  );
};

export default NotiPage;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 20px;

  .list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
  }

  .floating-btn {
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
