import { client } from "./client";

export const notiGetSubscribe = () => {
  return client.get("/api/v1/notifications/subscribe");
};

export const notiGetList = () => {
  return client.get("/api/v1/notifications/list");
};

export const notiPostReadAll = () => {
  return client.get("/api/v1/notifications/read/list");
};

export const notiPostReadEach = (id) => {
  return client.get(`/api/v1/notifications/read/${id}`);
};
