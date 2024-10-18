export const placeholderList = [
  { type: "BASIC", placeholder: "ex) 연희동 근처 플로깅 루트를 추천해줘." },
  { type: "WHERE", placeholder: "ex) 홍제폭포를 플로깅 루트에 포함해줘." },
  { type: "TIME", placeholder: "ex) 2시간 이내 루트를 추천해줘." },
  { type: "ETC", placeholder: "ex) 오르막이 없는 평지로 추천해줘." },
  { type: "FINISH", placeholder: "대화가 종료되었습니다." },
];

export const chatListInitialState = [];

//
export const chatListReducer = (state, action) => {
  // action으로 content(string), detail(string[])
  const [role, type] = action.type.split("_");
  switch (action.type) {
    case "user_BASIC":
    case "assistant_BASIC":
    case "assistant_DETAILED": {
      return [
        ...state,
        {
          type: type,
          role: role,
          content: action.content,
          timestamp: new Date(),
        },
      ];
    }
    case "user_DETAILED": {
      // 1. detail 배열에서 같은 type 중 마지막 요소만 남김
      const lastItems = Object.values(
        action.detail.reduce((acc, curr) => {
          acc[curr.type] = curr; // 같은 type일 때 덮어씀
          return acc;
        }, {})
      );

      // 2. 배열을 문자열로 변환
      const resultString = `Please provide additional information in Korean based on the plogging recommendation answer you mentioned before. ${lastItems
        .map((item) => `${item.type.toLowerCase()}: ${item.content}`)
        .join(", ")}`;

      return [
        ...state,
        {
          type: type,
          role: role,
          content: resultString,
          timestamp: new Date(),
        },
      ];
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
};
