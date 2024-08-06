import React from "react";
import styled from "styled-components";

const Info = ({ startDate, member, age, gender, withPet }) => {
  return (
    <Wrapper>
      <div className="row">참여 일시 | {startDate}</div>
      <div className="row">참여 인원 | {member}</div>
      <div className="row">참여 연령 | {age}</div>
      <div className="row">참여 성별 | {gender}</div>
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
