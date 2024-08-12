import React from "react";
import styled from "styled-components";

const FilterBtn = ({ text, onClick, $isActive, isDistrict = false }) => {
  return (
    <>
      {isDistrict ? (
        <FixedWrapper $isActive={$isActive} onClick={onClick}>
          {text}
        </FixedWrapper>
      ) : (
        <Wrapper $isActive={$isActive} onClick={onClick}>
          {text}
        </Wrapper>
      )}
    </>
  );
};

export default FilterBtn;

const Wrapper = styled.div`
  display: flex;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${(prop) => (prop.$isActive ? "var(--main)" : "var(--grey100)")};
  color: ${(prop) => (prop.$isActive ? "var(--white)" : "var(--grey500)")};
  font-weight: 600;
`;

const FixedWrapper = styled.div`
  display: flex;
  width: 62px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${(prop) => (prop.$isActive ? "var(--main)" : "var(--grey100)")};
  color: ${(prop) => (prop.$isActive ? "var(--white)" : "var(--grey500)")};
  font-weight: 600;
`;
