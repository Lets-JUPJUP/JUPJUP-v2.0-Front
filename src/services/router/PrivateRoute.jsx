import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

// 로그인 완료 유저만 접근 가능한 페이지
export const PrivateRoute = () => {
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("juptoken"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLogin(!!localStorage.getItem("juptoken"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

// 이미 로그인 한 유저는 register에 접근 불가
export const PrivateRouteTemp = () => {
  const [isTemp, setIsTemp] = useState(!!localStorage.getItem("temptoken"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsTemp(!!localStorage.getItem("temptoken"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isTemp ? <Outlet /> : <Navigate to="/" />;
};
