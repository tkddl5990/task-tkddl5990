import React, { useCallback, useState, useContext } from "react";
import { OtherContext } from "../../layouts/Container";

const Policy = () => {
  const { setOtherState } = useContext(OtherContext);
  const [total, setTotal] = useState(false);
  const [req, setReq] = useState(false);
  const [cho, setCho] = useState(false);

  const onChangeTotal = useCallback((e) => {
    setTotal(e.target.checked);
    setReq(e.target.checked);
    setCho(e.target.checked);
    transValue(e);
  }, []);

  const onChangeReq = useCallback((e) => {
    if (!e.target.checked) {
      setTotal((prev) => (prev ? !prev : prev));
    }
    setReq(e.target.checked);
    transValue(e);
  }, []);

  const onChangeCho = useCallback((e) => {
    if (!e.target.checked) {
      setTotal((prev) => (prev ? !prev : prev));
    }
    setCho(e.target.checked);
  }, []);

  const transValue = useCallback(
    (e) => {
      e.target.value = e.target.checked;
      setOtherState(e);
    },
    [setOtherState]
  );

  return (
    <article className={"common__article"}>
      <h2 className={"traveler__title"}>약관 동의</h2>
      <div className={"traveler__checkForm"}>
        <div className={"policy__checkBox total"}>
          <input
            type="checkbox"
            id={"total"}
            name={"policy"}
            onChange={onChangeTotal}
            checked={total}
          />
          <label htmlFor={"total"}>전체 약관 동의</label>
        </div>
      </div>
      <div className={"traveler__checkForm detail"}>
        <div className={"policy__checkBox"}>
          <input
            type="checkbox"
            id={"req"}
            name={"policy"}
            checked={req}
            onChange={onChangeReq}
          />
          <label htmlFor={"req"}>여행자 약관 동의 (필수)</label>
        </div>
        <div className={"policy__checkBox"}>
          <input
            type="checkbox"
            id={"cho"}
            onChange={onChangeCho}
            checked={cho}
          />
          <label htmlFor={"cho"}>
            특가 항공권 및 할인 혜택 안내 동의 (선택)
          </label>
        </div>
      </div>
    </article>
  );
};

export default React.memo(Policy);
