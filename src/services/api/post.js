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

//필터링 리스트 조회
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

//북마크하기
export const postCreateBookmark = async (id) => {
  return await client.post(`/api/v1/hearts/${id}`);
};

//북마크 취소
export const postDeleteBookmark = async (id) => {
  return await client.delete(`/api/v1/hearts/${id}`);
};
//가장 최근 완료한 플로깅 리스트
export const postGetCompletePost = async () => {
  return await client.get(`/api/v1/posts/latest-completed`);
};

//[완료]한 플로깅 리스트
export const postGetCompleteList = async () => {
  return await client.get(`/api/v1/posts/completed`);
};

//[모집완료]한 플로깅 리스트
export const postGetSuccessList = async () => {
  return await client.get(`/api/v1/posts/successful`);
};

//[모집중]인 플로깅 리스트
export const postGetRecruitingList = async () => {
  return await client.get(`/api/v1/posts/recruiting`);
};

//[전체] 플로깅 리스트
export const postGetWholeList = async () => {
  return await client.get(`/api/v1/posts/list`);
};

//북마크한 플로깅 리스트
export const postGetBookmarkList = async () => {
  return await client.get(`/api/v1/hearts/lists`);
};
