import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "postFormState",
  storage: localStorage,
});

export const postFormState = atom({
  key: "postFormState",
  default: {
    title: "", // 글 제목
    startDate: "", // 출발 일시
    dueDate: "", // 모집 마감 일시
    minAge: undefined,
    maxAge: undefined,
    minMember: undefined,
    maxMember: undefined,
    postGender: "ANY", // "MALE", "FEMALE", "ANY"(성별무관)
    withPet: false,
    content: "", // 글의 내용
    images: [], // 사진 추가 - presigned URL
  },
  effects_UNSTABLE: [persistAtom],
});
