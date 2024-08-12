export const district = [
  {
    key: "GANGNAM",
    kor: "강남구",
  },
  {
    key: "GANGDONG",
    kor: "강동구",
  },
  {
    key: "GANGBUK",
    kor: "강북구",
  },
  {
    key: "GANGSEO",
    kor: "강서구",
  },
  {
    key: "GWANAK",
    kor: "관악구",
  },

  {
    key: "GWANGJIN",
    kor: "광진구",
  },
  {
    key: "GURO",
    kor: "구로구",
  },
  {
    key: "GEUMCHEON",
    kor: "금천구",
  },
  {
    key: "NOWON",
    kor: "노원구",
  },
  {
    key: "DOBONG",
    kor: "도봉구",
  },

  {
    key: "DONGDAEMUN",
    kor: "동대문구",
  },
  {
    key: "DONGJAK",
    kor: "동작구",
  },
  {
    key: "MAPO",
    kor: "마포구",
  },
  {
    key: "SEODAEMUN",
    kor: "서대문구",
  },
  {
    key: "SEOCHO",
    kor: "서초구",
  },

  {
    key: "SEONGDONG",
    kor: "성동구",
  },
  {
    key: "SEONGBUK",
    kor: "성북구",
  },
  {
    key: "SONGPA",
    kor: "송파구",
  },
  {
    key: "YANGCHEON",
    kor: "양천구",
  },
  {
    key: "YEONGDEUNGPO",
    kor: "영등포구",
  },
  {
    key: "YONGSAN",
    kor: "용산구",
  },
  {
    key: "EUNPYEONG",
    kor: "은평구",
  },
  {
    key: "JONGNO",
    kor: "종로구",
  },
  {
    key: "JUNG",
    kor: "중구",
  },
  {
    key: "JUNGNANG",
    kor: "중랑구",
  },
];

export const getKorDistrict = (key) => {
  let kor = "";
  district.map((el) => {
    if (el.key === key) {
      kor = el.kor;
    }
  });
  return kor;
};

export const getEngDistrict = (kor) => {
  let key = "";
  district.map((el) => {
    if (el.kor === kor) {
      key = el.key;
    }
  });
  return key;
};
