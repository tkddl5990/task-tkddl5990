import {
  valitaionName,
  validationNameKo,
  validationBirth,
  validationGender,
} from "./traveler";
import {
  validationEtc,
  validationHour,
  validationMin,
  validationPhone,
} from "./other";

export const resultValidation = (list) => {
  let arr = [];
  let isSuccess = true;
  for (let i = 0; i < list.length; i++) {
    const { lastName, firstName, nameKo, gender, birth } = list[i];

    let isValidLastName = valitaionName(lastName);
    let isValidFirstName = valitaionName(firstName);
    let isValidNameKo = validationNameKo(nameKo);
    let isValidBirth = validationBirth(birth);
    let isValidGender = validationGender(gender);

    if (
      isValidLastName ||
      isValidFirstName ||
      isValidNameKo ||
      isValidBirth ||
      isValidGender
    ) {
      isSuccess = false;
    }

    arr.push({
      isValidLastName,
      isValidFirstName,
      isValidNameKo,
      isValidBirth,
      isValidGender,
    });
  }

  return [arr, isSuccess];
};

export const otherValidation = (obj) => {
  const { time, phone, etc, policy } = obj;
  let newObj = {};
  let isSuccess = true;
  let isValidHour = validationHour(time.hour);
  let isValidMin = validationMin(time.min);
  let isValidUserName = validationNameKo(phone.name);
  let isValidPhone = validationPhone(phone.tel);
  let isValidEtc = validationEtc(etc);

  newObj = {
    ...newObj,
    isValidHour,
    isValidMin,
    isValidUserName,
    isValidPhone,
    isValidEtc,
  };

  for (const [key, value] of Object.entries(newObj)) {
    if (value) isSuccess = false;
  }

  return [newObj, isSuccess];
};
