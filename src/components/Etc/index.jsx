import React, { useCallback, useEffect, useState } from "react";
import { validationEtc } from "../../validation/other";
import { useOtherInput } from "../../hooks/useInput";

const Etc = ({ setOtherState, paramsError }) => {
  const [etc, etcErr, onChangeEtc, setEtc, setEtcErr] = useOtherInput(
    "",
    "",
    validationEtc,
    { cb: setOtherState }
  );

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

export default React.memo(Etc);
