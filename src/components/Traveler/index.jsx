import React, { useEffect } from "react";
import {
  valitaionName,
  validationNameKo,
  validationBirth,
} from "../../validation/traveler";
import { useTravelerInput } from "../../hooks/useInput";

const TravelerItem = ({ material, deleteTravelerItem, paramsError }) => {
  const { cb, index } = material;
  const [
    lastName,
    lastNameErr,
    onChangeLastName,
    setLastName,
    setLastNameErr,
  ] = useTravelerInput("", "", valitaionName, material);
  const [
    firstName,
    firstNameErr,
    onChangeFirstName,
    setFirstName,
    setFirstNameErr,
  ] = useTravelerInput("", "", valitaionName, material);
  const [
    nameKo,
    nameKoErr,
    onChangeNameKo,
    setNameKo,
    setNameKoErr,
  ] = useTravelerInput("", "", validationNameKo, material);
  const [
    birth,
    birthErr,
    onChangeBirth,
    setBirth,
    setBirthErr,
  ] = useTravelerInput("", "", validationBirth, material);
  const [
    gender,
    genderErr,
    onChangeGender,
    setGender,
    setGenderErr,
  ] = useTravelerInput("", "", null, material);

  useEffect(() => {
    if (paramsError && Object.keys(paramsError).length) {
      setLastNameErr(paramsError.lastName);
      setFirstNameErr(paramsError.firstName);
      setNameKoErr(paramsError.nameKo);
      setBirthErr(paramsError.birth);
      setGenderErr(paramsError.gender);
    }
  }, [paramsError]);

  return (
    <article className={"common__article"}>
      <h2 className={"traveler__title"}>
        여행자<span>{index + 1}</span>
        {deleteTravelerItem && (
          <button
            className={"traveler__deleteButton"}
            onClick={deleteTravelerItem}
          >
            <span />
          </button>
        )}
      </h2>
      <p className={"traveler__label"}>
        예약하시는 모든 분의 정보를 여권 상과 동일하게 가입해 주시기 바랍니다.
      </p>
      <div className={"flex__row horizontal"}>
        <div
          className={`traveler__inputForm ${lastNameErr ? "onError" : null}`}
        >
          <label>영문 이름</label>
          <div>
            <input
              placeholder={"Gil Dong"}
              name={"lastName"}
              value={lastName}
              onChange={onChangeLastName}
            />
          </div>
          <span>{lastNameErr}</span>
        </div>
        <div className={"horizontal__void"} />
        <div
          className={`traveler__inputForm ${firstNameErr ? "onError" : null}`}
        >
          <label>영문 이름</label>
          <div>
            <input
              placeholder={"Hong"}
              name={"firstName"}
              value={firstName}
              onChange={onChangeFirstName}
            />
          </div>
          <span>{firstNameErr}</span>
        </div>
      </div>
      <div className={`traveler__inputForm ${nameKoErr ? "onError" : null}`}>
        <label>한글 이름</label>
        <div>
          <input
            placeholder={"홍길동"}
            name={"nameKo"}
            value={nameKo}
            onChange={onChangeNameKo}
          />
        </div>
        <span>{nameKoErr}</span>
      </div>
      <div className={`traveler__inputForm ${genderErr ? "onError" : null}`}>
        <label>성별</label>
        <div>
          <input
            type="radio"
            id={`genderMan|${index}`}
            name={`gender|${index}`}
            value={"man"}
            checked={gender === "man" ? true : false}
            onChange={onChangeGender}
          />
          <label
            htmlFor={`genderMan|${index}`}
            className={gender === "man" ? "onActive" : null}
          >
            남
          </label>
          <div className={"horizontal__line"} />
          <input
            type="radio"
            id={`genderWoman|${index}`}
            name={`gender|${index}`}
            value={"woman"}
            checked={gender === "woman" ? true : false}
            onChange={onChangeGender}
          />
          <label
            htmlFor={`genderWoman|${index}`}
            className={gender === "woman" ? "onActive" : null}
          >
            여
          </label>
        </div>
        <span>{genderErr}</span>
      </div>
      <div className={`traveler__inputForm ${birthErr ? "onError" : null}`}>
        <label>생년월일</label>
        <div>
          <input
            placeholder={"YYMMDD"}
            name={"birth"}
            value={birth}
            onChange={onChangeBirth}
          />
        </div>
        <span>{birthErr}</span>
      </div>
      <div className={"common__hr"} />
    </article>
  );
};

export default TravelerItem;
