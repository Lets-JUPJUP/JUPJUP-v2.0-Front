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

export const postGetList = async ({
  allGender,
  withPet,
  allAge,
  districts,
  excludeClosedRecruitment,
}) => {
  console.log(allGender, withPet, allAge, districts, excludeClosedRecruitment);
  var districtsUri = "";
  for (var i = 0; i < districts.length; i++) {
    districtsUri += `&districts=${districts[i]}`;
  }

  return await client.get(
    `/api/v1/posts/filter?allGender=${allGender}&withPet=${withPet}&allAge=${allAge}${districtsUri}&excludeClosedRecruitment=${excludeClosedRecruitment}`
  );
};
