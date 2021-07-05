import React, { useCallback, useEffect, useState } from "react";
import { validationEtc } from "../../validation/other";

const Etc = ({ setStateOthers, paramsError }) => {
  const [etc, setEtc] = useState("");
  const [etcErr, setEtcErr] = useState("");

  const onChangeEtc = useCallback((e) => {
    let msg = validationEtc(e.target.value);
    setEtc(e.target.value);
    setEtcErr(msg);
    setStateOthers(e);
  }, []);

  useEffect(() => {
    setEtcErr(paramsError);
  }, [paramsError]);

  return (
    <article className={"common__article"}>
      <h2 className={"traveler__title"}>기타 예약 정보</h2>
      <div className={`traveler__inputForm ${etcErr ? "onError" : null}`}>
        <label>오시는 교통 수단을 적어주세요.</label>
        <div>
          <textarea
            placeholder={"답변을 입력해주세요."}
            name={"etc"}
            value={etc}
            onChange={onChangeEtc}
          />
        </div>
        <span>{etcErr}</span>
      </div>
    </article>
  );
};

export default Etc;
