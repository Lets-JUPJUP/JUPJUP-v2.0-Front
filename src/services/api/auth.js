import axios from "axios";
// import { refreshClient } from "./client";

const SERVER_DOMAIN = process.env.REACT_APP_SERVER_DOMAIN;

// //액세스 토큰 재발급
// export const authGetNewToken = async () => {
//   return refreshClient.post("api/v1/auth/refresh");
// };

// //회원탈퇴
// export const authPostWithdraw = async (token) => {
//   return axios.post(`${SERVER_DOMAIN}/api/v1/auth/withdraw`, {
//     accessToken: token,
//   });
// };
