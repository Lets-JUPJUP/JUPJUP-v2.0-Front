import React from "react";
import styled from "styled-components";

const Info = () => {
  return (
    <Wrapper>
      <div className="row">참여 일시 | 텍스트</div>
      <div className="row">참여 인원 | 텍스트</div>
      <div className="row">참여 연령 | 텍스트</div>
      <div className="row">참여 성별 | 텍스트</div>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.div`
  border-top: 1.2px solid var(--grey300);
  border-bottom: 1.2px solid var(--grey300);
  background: var(--white);
  color: var(--black);
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
