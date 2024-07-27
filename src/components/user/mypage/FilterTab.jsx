import React from "react";
import styled from "styled-components";

const FilterTab = ({ currentTab = 1, setCurrentTab }) => {
  return (
    <Wrapper>
      <Filter onClick={() => setCurrentTab(1)} $isSelected={currentTab == 1}>
        전체
      </Filter>
      <Filter onClick={() => setCurrentTab(2)} $isSelected={currentTab == 2}>
        모집중
      </Filter>
      <Filter onClick={() => setCurrentTab(3)} $isSelected={currentTab == 3}>
        모집 성공
      </Filter>
      <Filter onClick={() => setCurrentTab(4)} $isSelected={currentTab == 4}>
        완료
      </Filter>
    </Wrapper>
  );
};

export default FilterTab;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  height: 48px;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  border-top: 1.2px solid var(--grey300, #d5d9de);
  border-bottom: 1.2px solid var(--grey300, #d5d9de);

  margin-bottom: 12px;
`;

const Filter = styled.div`
  color: ${(props) => (props.$isSelected ? "var(--main)" : "var(--black)")};
  font-size: 16px;
  font-weight: 600;
`;
