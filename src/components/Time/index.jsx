import React, { useEffect } from "react";
import { HourOptions, MinOptions } from "../Options";
import { useOtherInput } from "../../hooks/useInput";

const Time = ({ paramsError }) => {
  const [hour, hourErr, onChangeHour, setHour, setHourErr] = useOtherInput(
    "",
    "",
    undefined
  );
  const [min, minErr, onChangeMin, setMin, setMinErr] = useOtherInput(
    "",
    "",
    undefined
  );

  useEffect(() => {
    if (paramsError && Object.keys(paramsError).length) {
      setHourErr(paramsError.hour);
      setMinErr(paramsError.min);
    }
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

export default React.memo(Time);
