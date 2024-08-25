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
    <Wrapper>
      <Logo src={logo} />

      <div onClick={handlekakaoLogin}>
        <Kakao src={kakao} />
      </div>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  position: fixed;
  margin-top: 20vh;
`;

const Kakao = styled.img`
  position: fixed;
  bottom: 80px;

  transform: translate(-50%, 0%);
`;
