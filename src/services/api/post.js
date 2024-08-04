import { client } from "./client";

export const postCreatePost = async (body) => {
  return client.post("api/v1/posts", body);
};
