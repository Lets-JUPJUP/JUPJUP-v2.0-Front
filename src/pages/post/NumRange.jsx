import React from "react";
import styled from "styled-components";

const NumRange = () => {
  return (
    <Wrapper>
      <div className="min">
        <div className="text">최소</div>
        <input type="number" min="1" max="120" placeholder="nn" />
      </div>

      <div className="max">
        <div className="text">최대</div>
        <input type="number" min="1" max="120" placeholder="nn" />
      </div>
    </Wrapper>
  );
};

export default NumRange;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  .max,
  .min {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  input {
    outline: none;
    border: none;
    border-radius: var(--basic, 2px);
    background: var(--grey100, #eef0f3);
    display: flex;
    width: 41px;
    box-sizing: border-box;
    padding: 8px 10px;
    justify-content: center;
    align-items: center;
  }
`;
