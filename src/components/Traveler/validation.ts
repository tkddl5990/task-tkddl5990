const valitaionName = (message: string) => {
  let regExp = /[0-9|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  if (message.length < 2) return "최소 2자 이상 입력해주세요.";
  if (message.length > 20) return "최대 20자까지 입력 가능합니다.";
  if (regExp.exec(message)) return "영어와 띄어쓰기만 입력 가능합니다.";
  return "";
};

const validationNameKo = (message: string) => {
  let regExp = /[0-9|a-z|A-Z|\s\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
  if (message.length < 2) return "최소 2자 이상 입력해주세요.";
  if (message.length > 20) return "최대 20자까지 입력 가능합니다.";
  if (regExp.exec(message)) return "한글만 입력 가능합니다.";
  return "";
};

const validationBirth = (message: string) => {
  if (message.length !== 6) return "6자리의 생년월일을 입력해 주세요.(YYMMDD)";
  if (isNaN(parseInt(message))) return "숫자(0~9)만 입력 가능합니다.";
  return "";
};

const totalValidation = {
  valitaionName,
  validationNameKo,
  validationBirth,
};

export default totalValidation;
