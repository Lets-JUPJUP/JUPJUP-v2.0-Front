import React from "react";
import kakao from "../../assets/auth/kakao.svg";
import logo from "../../assets/auth/logo.svg";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <>
      <Logo src={logo} />

      <div>
        <Kakao src={kakao} />
      </div>
    </>
  );
};

export default LoginPage;

const Logo = styled.img`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const Kakao = styled.img`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
