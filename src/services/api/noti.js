import { client } from "./client";

export const notiGetSubscribe = async () => {
  return await client.get("/api/v1/notifications/subscribe");
};

export const notiGetList = async () => {
  return await client.get("/api/v1/notifications/list");
};

export const notiPostReadAll = async () => {
  return await client.post("/api/v1/notifications/read/list");
};

export const notiPostReadEach = async (id) => {
  return await client.post(`/api/v1/notifications/read/${id}`);
};
