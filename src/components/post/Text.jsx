import React from "react";
import styled from "styled-components";

const Text = () => {
  return (
    <Wrapper>
      카페거리 근처에서 담배꽁초 같이 주워요! 쓰레기 담을 봉투랑 장갑 등은 개인
      지참이고, 플로깅 끝나고 같이 커피 마시게 텀블러 챙겨서 만나요 :)
    </Wrapper>
  );
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
