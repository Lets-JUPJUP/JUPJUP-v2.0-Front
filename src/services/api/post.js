import { client } from "./client";

//글 작성
export const postCreatePost = async (body) => {
  return await client.post("api/v1/posts", body);
};

//글 상세조회
export const postGetDetail = async (id) => {
  return await client.get(`/api/v1/posts/${id}`);
};

//댓글 리스트 조회
export const postGetComments = async (id) => {
  return await client.get(`/api/v1/comments/${id}`);
};

//댓글 작성
export const postCreateComment = async (id, body) => {
  return await client.post(`/api/v1/comments/${id}`, body);
};
