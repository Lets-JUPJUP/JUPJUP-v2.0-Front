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
    district: "", // 플로깅 루트의 시작점의 지역구를 string으로 담음
    route: [
      // 플로깅 루트
      // {
      //   address: "",
      //   latitude: undefined,
      //   longitude: undefined,
      // },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});
