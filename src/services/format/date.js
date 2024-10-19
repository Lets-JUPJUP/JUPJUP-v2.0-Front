//날짜 형식을 포맷하는 함수
export const handleDateFormat = (date) => {
  var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  var localISOTime = new Date(date - tzoffset).toISOString().substr(0, 16);
  return localISOTime;
};

// Date 설정 (ex. "2023-03-06T09:30:00")
// isKor을 true로 설정하면 한글버전이 return됨
export const handleDateString = (target, isKor = false) => {
  const [date, time] = target.split("T");
  const [, month, day] = date.split("-");
  // time에서 seconds는 제외하고 출력
  const [hour, minute] = time.split(":");
  return isKor
    ? month + "월 " + day + "일 " + hour + ":" + minute
    : month + "/" + day + " " + hour + ":" + minute;
};

export const handleISOTime = (isoString) => {
  const date = new Date(isoString); // ISO 형식의 날짜 생성
  
  // 한국 시간 (KST, UTC+9) 오프셋을 더한 새로운 시간 생성
  const utcOffset = date.getTimezoneOffset() * 60000; // UTC 오프셋 (분) -> 밀리초
  const kstOffset = 9 * 60 * 60000; // 한국 표준시 (9시간) -> 밀리초

  const koreanTime = new Date(date.getTime() + utcOffset + kstOffset); // KST 시간으로 변환된 Date 객체
  
  return koreanTime;
};