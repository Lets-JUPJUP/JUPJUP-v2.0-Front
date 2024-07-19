import React from "react";
import styled from "styled-components";

const Filters = () => {
  return (
    <Wrapper>
      <div className="section">
        <div className="title">기본 설정</div>
        <div className="btns">
          <Btn>모집 마감 제외</Btn>
          <Btn>반려동물 동반 가능</Btn>
        </div>
      </div>

      <div className="section">
        <div className="title">참여 연령</div>
        <div className="btns">
          <Btn>연령 무관</Btn>
          <Btn>내 연령 포함</Btn>
        </div>
      </div>

      <div className="section">
        <div className="title">참여 성별 & 동물</div>
        <div className="btns">
          <Btn>성별 무관</Btn>
          <Btn>내 성별 포함</Btn>
        </div>
      </div>

      <div className="section">
        <div className="title">시작 위치</div>
        <div className="container">
          <div className="btns">
            <Btn>강남구</Btn>
            <Btn>강동구</Btn>
            <Btn>강북구</Btn>
            <Btn>강서구</Btn>
            <Btn>관악구</Btn>
            <Btn>광진구</Btn>
            <Btn>구로구</Btn>
            <Btn>금천구</Btn>
          </div>
          <div className="btns">
            <Btn>노원구</Btn>
          </div>
          <div className="btns">
            <Btn>도봉구</Btn>
            <Btn>동대문구</Btn>
            <Btn>동작구</Btn>
          </div>
          <div className="btns">
            <Btn>마포구</Btn>
          </div>
          <div className="btns">
            <Btn>서대문구</Btn>
            <Btn>서초구</Btn>
            <Btn>성동구</Btn>
            <Btn>성북구</Btn>
            <Btn>송파구</Btn>
          </div>
          <div className="btns">
            <Btn>양천구</Btn>
            <Btn>영등포구</Btn>
            <Btn>용산구</Btn>
            <Btn>은평구</Btn>
          </div>
          <div className="btns">
            <Btn>종로구</Btn>
            <Btn>중구</Btn>
            <Btn>중랑구</Btn>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .section {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .title {
    color: var(--black);

    font-size: 16px;
    font-weight: 600;
  }

  .btns {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const Btn = styled.div`
  display: flex;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--grey100);

  color: var(--grey500, #8d939a);
  font-weight: 600;
`;
