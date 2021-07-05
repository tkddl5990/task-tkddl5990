export const validationHour = (hour) => {
  if (hour) return "";
  else return "시간을 선택해주세요.";
};

export const validationMin = (min) => {
  if (min) return "";
  else return "분을 선택해주세요.";
};

export const validationPhone = (tel) => {
  let regExp = /[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  if (tel.length < 2) return "최소 2자 이상 입력해주세요.";
  if (tel.length > 20) return "최대 20자까지 입력 가능합니다.";
  if (regExp.exec(tel)) return "숫자(0~9)만 입력가능합니다.";
  return "";
};

export const validationEtc = (message) => {
  if (!message) return "기타 예약 정보를 입력해주세요.";
  if (message.length > 200) return "최대 200자까지 입력 가능합니다.";
  return "";
};
