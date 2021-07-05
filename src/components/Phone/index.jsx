import React, { useCallback, useState, useEffect } from "react";
import { validationNameKo } from "../../validation/traveler";
import { validationPhone } from "../../validation/other";

const Phone = ({ setStateOthers, paramsError }) => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");

  const [tel, setTel] = useState("");
  const [telErr, setTelErr] = useState("");

  const onChangeName = useCallback((e) => {
    let msg = validationNameKo(e.target.value);
    setName(e.target.value);
    setNameErr(msg);
    setStateOthers(e);
  }, []);

  const onChangeTel = useCallback((e) => {
    let msg = validationPhone(e.target.value);
    setTel(e.target.value);
    setTelErr(msg);
    setStateOthers(e);
  }, []);

  useEffect(() => {
    setNameErr(paramsError.name);
    setTelErr(paramsError.tel);
  }, [paramsError]);

  return (
    <article className={"common__article"}>
      <h2 className={"traveler__title"}>상세 핸드폰 정보</h2>
      <div className={`traveler__inputForm ${nameErr ? "onError" : null}`}>
        <label>사용자 이름</label>
        <div>
          <input
            placeholder={"홍길동"}
            name={"phone|name"}
            value={name}
            onChange={onChangeName}
          />
        </div>
        <span>{nameErr}</span>
      </div>
      <div className={"flex__row timeHorizontal"}>
        <div className={`traveler__inputForm`}>
          <div>
            <select>
              <option>+82(대한민국)</option>
            </select>
          </div>
        </div>
        <div className={"horizontal__void"} />
        <div className={`traveler__inputForm ${telErr ? "onError" : null}`}>
          <div>
            <input
              placeholder={"-없이 입력해주세요."}
              name={"phone|tel"}
              value={tel}
              onChange={onChangeTel}
            />
          </div>
          <span>{telErr}</span>
        </div>
      </div>
      <div className={"common__hr"} />
    </article>
  );
};

export default Phone;
