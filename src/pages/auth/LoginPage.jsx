import React from "react";
import kakao from "../../assets/auth/kakao.svg";
import logo from "../../assets/auth/logo.svg";
import styled from "styled-components";

const LoginPage = () => {
  const handlekakaoLogin = () => {
    const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
    const SERVER_DOMAIN = process.env.REACT_APP_SERVER_DOMAIN;
    const KAKAO_AUTH_URL = `${SERVER_DOMAIN}/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}`;

    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <Logo src={logo} />

      <div onClick={handlekakaoLogin}>
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
