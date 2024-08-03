import axios from "axios";
import { client } from "./client";

const SERVER_DOMAIN = process.env.REACT_APP_SERVER_DOMAIN;

//자신 프로필 조회
export const memberGetMyProfile = async () => {
  return await client.get("api/v1/members");
};

//가입 중도 이탈자: 헤더 직접 넣기
export const memberGetMyProfile_ = async (headers) => {
  return await axios.get(`${SERVER_DOMAIN}/api/v1/members`, headers);
};

//닉네임 중복체크
export const memberCheckValidName = async (body) => {
  return await client.post("api/v1/members/checkNickname", body);
};

//프로필 생성 및 수정
export const memberUpdateProfile = async (body) => {
  return await client.put("/api/v1/members", body);
};

//상대 유저 프로필 조회
export const memberGetUserProfile = async (memberId) => {
  return await client.get(`/api/v1/members/${memberId}`);
};
