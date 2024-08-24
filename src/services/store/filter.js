import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const getSavedFilter = () => {
  const savedValue = localStorage.getItem("filters");
  return savedValue
    ? JSON.parse(savedValue).filterPersistState
    : {
        allGender: true,
        withPet: true,
        allAge: false,
        districts: [],
        excludeClosedRecruitment: true,
      };
};

const { persistAtom } = recoilPersist({
  key: "filters",
  storage: localStorage,
});

export const filterState = atom({
  key: "filterState",
  default: getSavedFilter(),
});

export const filterPersistState = atom({
  key: "filterPersistState",
  default: {
    allGender: true,
    withPet: true,
    allAge: false,
    districts: [],
    excludeClosedRecruitment: true,
  },
  effects_UNSTABLE: [persistAtom],
});
