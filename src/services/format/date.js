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

// UTC(타임존) 변환 없이 Date 객체를 ISO 문자열로 변환
export const handleDate = (date) => {
  return date.toISOString().substr(0, 16); // 기본 toISOString 사용
};

// ISO 문자열을 Date 객체로 변환
export const handleISOTime = (isoString) => {
  return new Date(isoString);
};