import React, { useCallback, useEffect, useState } from "react";

const HourOptions = React.memo(() => {
  console.log("hourOptions");
  return Array.from({ length: 24 }, () => "hour").map((item, index) => (
    <option
      key={`${item}-${index}`}
      value={`${index}시`}
    >{`${index}시`}</option>
  ));
});

const MinOptions = React.memo(() => {
  console.log("minotpis");
  return Array.from({ length: 60 }, () => "minute").map((item, index) => (
    <option
      key={`${item}-${index}`}
      value={`${index}분`}
    >{`${index}분`}</option>
  ));
});

const Time = ({ setStateOthers, paramsError }) => {
  const [hour, setHour] = useState("");
  const [hourErr, setHourErr] = useState("");

  const [min, setMin] = useState("");
  const [minErr, setMinErr] = useState("");

  const onChangeHour = useCallback((e) => {
    setHour(e.target.value);
    setStateOthers(e);
    setHourErr("");
  }, []);

  const onChangeMin = useCallback((e) => {
    setMin(e.target.value);
    setStateOthers(e);
    setMinErr("");
  }, []);

  useEffect(() => {
    setHourErr(paramsError.hour);
    setMinErr(paramsError.min);
  }, [paramsError]);

  return (
    <article className={"common__article"}>
      <h2 className={"traveler__title"}>숙소 도착 예정 시간</h2>
      <div className={"flex__row horizontal"}>
        <div className={`traveler__inputForm ${hourErr ? "onError" : null}`}>
          <div>
            <select name={"time|hour"} value={hour} onChange={onChangeHour}>
              <option value={""}>시</option>
              <HourOptions />
            </select>
          </div>
          <span>{hourErr}</span>
        </div>
        <div className={"horizontal__void"} />
        <div className={`traveler__inputForm ${minErr ? "onError" : null}`}>
          <div>
            <select name={"time|min"} value={min} onChange={onChangeMin}>
              <option value={""}>분</option>
              <MinOptions />
            </select>
          </div>
          <span>{minErr}</span>
        </div>
      </div>
      <div className={"common__hr"} />
    </article>
  );
};

export default Time;
