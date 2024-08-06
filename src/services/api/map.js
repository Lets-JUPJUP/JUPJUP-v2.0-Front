import { client } from "./client";

export const mapGetTrashCans = ({ x, y }) => {
  return client.get(`/api/v2/trashCans?mapX=${x}&mapY=${y}`);
};
