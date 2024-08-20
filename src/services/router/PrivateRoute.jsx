import { Navigate, Outlet } from "react-router-dom";

//로그인 완료 유저만 접근 가능한 페이지
const isLogin = !!localStorage.getItem("juptoken");

export const PrivateRoute = () => {
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

//이미 로그인 한 유저는 register에 접근 불가
const isTemp = !!localStorage.getItem("temptoken");

export const PrivateRouteTemp = () => {
  return isTemp ? <Outlet /> : <Navigate to="/" />;
};
