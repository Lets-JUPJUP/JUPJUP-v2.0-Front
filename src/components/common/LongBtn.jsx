import React from "react";
import styled from "styled-components";

const LongBtn = ({ isActive = false, text }) => {
  return (
    <>
      <Btn>{text}</Btn>
    </>
  );
};

export default LongBtn;

const Btn = styled.div`
  width: 350px;
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
