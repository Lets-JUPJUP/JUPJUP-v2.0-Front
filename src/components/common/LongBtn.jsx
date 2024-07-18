import React from "react";
import styled from "styled-components";

const LongBtn = ({ isActive = false, text }) => {
  return (
    <Wrapper>
      <Btn>{text}</Btn>
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
  background: var(--main);

  color: var(--white);
  font-size: 18px;
  font-weight: 600;
`;
