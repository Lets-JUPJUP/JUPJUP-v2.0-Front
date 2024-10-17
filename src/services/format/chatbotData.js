export const placeholderList = [
  { type: "BASIC", placeholder: "ex) 연희동 근처 플로깅 루트를 추천해줘." },
  { type: "WHERE", placeholder: "ex) 홍제폭포를 플로깅 루트에 포함해줘." },
  { type: "TIME", placeholder: "ex) 2시간 이내 루트를 추천해줘." },
  { type: "ETC", placeholder: "ex) 오르막이 없는 평지로 추천해줘." },
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
      // detail 배열에서 각 카테고리 별로 마지막 요소만 따온 뒤
      // string 처리해서 content에 추가
      return [];
    }
    default:
      throw Error("Unknown action: " + action.type);
  }
};
