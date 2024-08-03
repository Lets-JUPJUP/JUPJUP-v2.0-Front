import React from "react";
import styled from "styled-components";

const LongBtn = ({ isActive = true, text, onClick }) => {
  return (
    <Wrapper>
      <Btn $isActive={isActive} onClick={isActive ? onClick : null}>
        {text}
      </Btn>
    </Wrapper>
  );
};

export default LongBtn;

const Wrapper = styled.div`
  width: 100vw;
  box-sizing: border-box;
  padding: 0 20px;
`;

const Btn = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 12px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${(props) =>
    props.$isActive ? "var(--main)" : "var(--grey300)"};

  color: var(--white);
  font-size: 18px;
  font-weight: 600;
`;
