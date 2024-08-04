//날짜 형식을 포맷하는 함수
export const handleDateFormat = (date) => {
  var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
  var localISOTime = new Date(date - tzoffset).toISOString().substr(0, 16);
  return localISOTime;
};
