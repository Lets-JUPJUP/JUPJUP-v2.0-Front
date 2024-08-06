import React from "react";
import styled from "styled-components";

const Text = ({ content }) => {
  return <Wrapper>{content}</Wrapper>;
};

export default Text;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 16px 10px;
  align-items: center;

  color: var(--black);
`;
