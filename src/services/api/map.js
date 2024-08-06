import { client } from "./client";

export const mapGetTrashCans = ({ x, y }) => {
  return client.get(`/api/v2/trashCans?mapX=${x}&mapY=${y}`);
};

export const mapPostFeedback = (body) => {
  return client.post("/api/v2/trashCans/feedbacks", body);
};

export const mapGetFeedback = (id) => {
  return client.get(`/api/v2/trashCans/feedbacks/${id}`);
};
