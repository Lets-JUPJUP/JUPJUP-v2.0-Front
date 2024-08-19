import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Toast = ({ message, duration = 1500, setToastMessage }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const fadeOutTimer = setTimeout(() => {
      setVisible(false);
    }, duration - 500);

    setTimeout(() => {
      setToastMessage("");
    }, duration);

    return () => {
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <>
      <Wrapper visible={visible}>
        <div>{message}</div>
      </Wrapper>
    </>
  );
};

export default Toast;

const Wrapper = styled.div`
  width: 100vw;
  box-sizing: border-box;
  padding: 0 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  display: flex;
  justify-content: center;

  div {
    white-space: pre-line;
    width: 100%;
    box-sizing: border-box;
    padding: 12px 10px;
    background: rgba(9, 9, 10, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 4px;
    color: var(--white);
    text-align: center;
  }
`;
