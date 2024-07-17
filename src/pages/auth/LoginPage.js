import React from "react";
import kakao from "../../assets/auth/kakao.svg";
import logo from "../../assets/auth/logo.svg";

const LoginPage = () => {
  return (
    <>
      <div class="grid place-items-center">
        <img
          src={logo}
          class="absolute top-1/4 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <img
        src={kakao}
        class="absolute bottom-20 left-1/2 transform -translate-x-1/2"
      />
    </>
  );
};

export default LoginPage;
