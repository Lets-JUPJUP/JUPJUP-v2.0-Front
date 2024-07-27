import React from "react";
import styled from "styled-components";
import noti from "../../../assets/icons/noti.svg";

const NotiItem = () => {
  return (
    <Wrapper>
      <div className="top">
        <div className="left">
          <img className="icon" src={noti} />
          <div className="title">플로깅 성사 여부 확인하기</div>
        </div>

        <div className="date">00/00/00</div>
      </div>

      <div className="bottom">
        마이페이지 - 내 플로깅에서 참여 신청한 플로깅의 성사 여부를 확인하세요.
      </div>
    </Wrapper>
  );
};

export default NotiItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .icon {
    width: 20px;
    height: 20px;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
  }

  .date {
    font-size: 12px;
  }

  .top {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      gap: 8px;
    }
  }

  .bottom {
    padding-left: 28px;
  }
`;
