import React from "react";
import styled from "styled-components";
import filter from "../../assets/icons/filter.svg";

const Filter = () => {
  return (
    <Wrapper>
      <img src={filter} />
      <div className="scroll-area">
        <Option>모집 마감 제외</Option>
        <Option>모집 마감 제외</Option>
        <Option>모집 마감 제외</Option>
        <Option>모집 마감 제외</Option>
        <Option>모집 마감 제외</Option>
        <Option>모집 마감 제외</Option>
      </div>
    </Wrapper>
  );
};

export default Filter;

const Wrapper = styled.div`
  display: flex;
  height: 48px;
  align-items: center;
  gap: 12px;
  border-top: 1.4px solid var(--grey300);
  border-bottom: 1.4px solid var(--grey300);
  background: var(--white);

  .scroll-area {
    padding: 12px 0px;
    display: flex;
    gap: 8px;
    overflow-x: scroll;
  }
`;

const Option = styled.div`
  flex-shrink: 0;
  color: var(--main);
  font-size: 12px;
  font-weight: 300;

  display: flex;
  padding: 2px 4px;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 2px solid var(--light);
  background: var(--light);
`;
