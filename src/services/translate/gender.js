export const gender = [
  {
    key: "FEMALE",
    kor: "여성",
  },
  {
    key: "MALE",
    kor: "남성",
  },
  {
    key: "NOT_DEFINED",
    kor: "미정",
  },
  {
    key: "ANY",
    kor: "성별무관",
  },
];

export const getKorGender = (key) => {
  let kor = "";
  gender.map((el) => {
    if (el.key === key) {
      kor = el.kor;
    }
  });
  return kor;
};
