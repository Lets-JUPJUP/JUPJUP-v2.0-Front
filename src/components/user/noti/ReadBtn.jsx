import React from "react";
import styled from "styled-components";

const ReadBtn = ({ onClick }) => {
  return <Wrapper onClick={onClick}>전체 읽음 처리</Wrapper>;
};

export default ReadBtn;

const Wrapper = styled.div`
  width: 100px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--btn, 4px);
  background: var(--main, #7654ff);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.04),
    0px -2px 20px 0px rgba(0, 0, 0, 0.06);

  color: var(--white, #fff);
  font-weight: 600;
`;
