import React from "react";
import styled from "styled-components";

const Input = ({ placeholder }) => {
  return <CustomInput placeholder={placeholder} type="number" />;
};

export default Input;

const CustomInput = styled.input`
  height: 36px;
  box-sizing: border-box;
  padding: 8px 10px;
  background-color: var(--grey100);
  border-radius: 2px;
  text-align: center;

  border: none;
  outline: none;
`;
