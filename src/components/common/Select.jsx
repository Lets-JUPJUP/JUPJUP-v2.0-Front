import React, { useState } from "react";
import styled from "styled-components";
import down from "../../assets/icons/down.svg";

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openSelect = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Wrapper onClick={openSelect}>
        <img src={down} className="down" />
        성별
      </Wrapper>
      {isOpen && (
        <Options>
          <div className="option">남성</div>
          <div className="line" />
          <div className="option">여성</div>
        </Options>
      )}
    </>
  );
};

export default Select;

const Wrapper = styled.div`
  position: relative;
  height: 36px;
  box-sizing: border-box;
  padding: 8px 10px;
  background-color: var(--grey100);
  border-radius: 2px;
  text-align: center;
  align-items: center;

  color: var(--grey500);
  font-weight: 300;

  .down {
    position: absolute;
    right: 10px;
  }
`;

const Options = styled.div`
  margin-top: -13px;

  border-radius: 2px;
  border: 1.2px solid var(--grey300);
  background: var(--white);
  display: flex;
  flex-direction: column;
  height: 74px;
  box-sizing: border-box;

  justify-content: center;
  align-items: center;

  .line {
    width: 100%;
    height: 1.2px;
    background-color: var(--grey300);
  }

  .option {
    text-align: center;
    padding: 8px 10px;
  }
`;
