import React, { useEffect, useCallback, useState } from "react";
import TravelerItem from "../../components/Traveler";
import Time from "../../components/Time";
import Phone from "../../components/Phone";
import Etc from "../../components/Etc";
import { otherValidation, resultValidation } from "../../validation/container";

const TravelerObj = {
  lastName: "",
  firstName: "",
  nameKo: "",
  gender: "",
  birth: "",
};

const Container = () => {
  const [params, setParams] = useState({
    traveler: [],
    time: {
      hour: "",
      min: "",
    },
    phone: {
      name: "",
      tel: "",
    },
    etc: "",
    policy: "",
  });
  const [paramsErr, setParamsErr] = useState({
    traveler: [],
    time: {
      hour: "",
      min: "",
    },
    phone: {
      name: "",
      tel: "",
    },
    etc: "",
    policy: "",
  });

  useEffect(() => {
    addTraveler();
  }, []);

  const addTraveler = useCallback(() => {
    setParams((prev) => ({
      ...prev,
      traveler: [...prev.traveler, TravelerObj],
    }));
  }, []);

  const deleteTraveler = useCallback(() => {
    setParams((prev) => {
      return {
        ...prev,
        traveler: prev.traveler.filter(
          (item, index) => prev.traveler.length - 1 !== index
        ),
      };
    });
  }, []);

  const setStateTraveler = useCallback((value, key, index) => {
    setParams((prev) => {
      let current = prev.traveler[index];
      if (current[key] === value) return prev;
      current = {
        ...current,
        [key]: value,
      };
      prev.traveler[index] = current;
      return prev;
    });
  }, []);

  const setStateOthers = useCallback((e) => {
    e.persist();
    setParams((prev) => {
      if (e.target) {
        if (e.target.name.includes("|")) {
          const [main, sub] = e.target.name.split("|");
          return {
            ...prev,
            [main]: {
              ...prev[main],
              [sub]: e.target.value,
            },
          };
        } else {
          return {
            ...prev,
            [e.target.name]: e.target.value,
          };
        }
      }
    });
  }, []);

  const submit = useCallback(() => {
    const [isValidTraveler, isTravelerSuccess] = resultValidation(
      params.traveler
    );
    const [isValidationOthers, isOthersSuccess] = otherValidation(params);

    console.log(isValidationOthers, isOthersSuccess);

    if (!isTravelerSuccess || !isOthersSuccess) {
      setParamsErr((prev) => {
        return {
          ...prev,
          traveler: !isTravelerSuccess ? isValidTraveler : prev.traveler,
          time: {
            hour: isValidationOthers.isValidHour
              ? isValidationOthers.isValidHour
              : "",
            min: isValidationOthers.isValidMin
              ? isValidationOthers.isValidMin
              : "",
          },
          phone: {
            name: isValidationOthers.isValidUserName
              ? isValidationOthers.isValidUserName
              : "",
            tel: isValidationOthers.isValidPhone
              ? isValidationOthers.isValidPhone
              : "",
          },
          etc: isValidationOthers.isValidEtc
            ? isValidationOthers.isValidEtc
            : "",
        };
      });
    } else {
      alert("야호 통과!!!");
    }

    console.log(isValidTraveler);
    console.log(params);
  }, [params]);

  return (
    <section className={"layout__section"}>
      {params.traveler.map((item, index) => (
        <TravelerItem
          key={`travelerItem-${index}`}
          index={index}
          deleteFn={index ? deleteTraveler : undefined}
          setStateTraveler={setStateTraveler}
          paramsError={paramsErr.traveler[index]}
        />
      ))}

      <button className={"addTravelerButton"} onClick={addTraveler}>
        <span className={"button__horizontal"} />
        <span className={"button__vertical"} />
      </button>

      <Time setStateOthers={setStateOthers} paramsError={paramsErr.time} />

      {/* <article className={"common__article"}>
        <h2 className={"traveler__title"}>숙소 도착 예정 시간</h2>
        <div className={"flex__row horizontal"}>
          <div className={"traveler__inputForm"}>
            <div>
              <select
                name={"time|hour"}
                value={params.time.hour}
                onChange={setStateOthers}
              >
                <option>시</option>
                {Array.from({ length: 24 }, () => "hour").map((item, index) => (
                  <option
                    key={`${item}-${index}`}
                    value={`${index}시`}
                  >{`${index}시`}</option>
                ))}
              </select>
            </div>
            <span>영어로 2자이상 입력해주세요.</span>
          </div>
          <div className={"horizontal__void"} />
          <div className={"traveler__inputForm"}>
            <div>
              <select
                name={"time|min"}
                value={params.time.min}
                onChange={setStateOthers}
              >
                <option>분</option>
                {Array.from({ length: 60 }, () => "minute").map(
                  (item, index) => (
                    <option
                      key={`${item}-${index}`}
                      value={`${index}분`}
                    >{`${index}분`}</option>
                  )
                )}
              </select>
            </div>
            <span>영어로 2자이상 입력해주세요.</span>
          </div>
        </div>
        <div className={"common__hr"} />
      </article> */}
      <Phone setStateOthers={setStateOthers} paramsError={paramsErr.phone} />

      {/* <article className={"common__article"}>
        <h2 className={"traveler__title"}>상세 핸드폰 정보</h2>
        <div className={"traveler__inputForm"}>
          <label>사용자 이름</label>
          <div>
            <input
              placeholder={"홍길동"}
              name={"phone|name"}
              value={params.phone.name}
              onChange={setStateOthers}
            />
          </div>
          <span>한글로 2자이상 입력해주세요.</span>
        </div>
        <div className={"flex__row timeHorizontal"}>
          <div className={"traveler__inputForm"}>
            <div>
              <select>
                <option>+82(대한민국)</option>
              </select>
            </div>
            <span>영어로 2자이상 입력해주세요.</span>
          </div>
          <div className={"horizontal__void"} />
          <div className={"traveler__inputForm"}>
            <div>
              <input
                placeholder={"홍길동"}
                name={"phone|tel"}
                value={params.phone.tel}
                onChange={setStateOthers}
              />
            </div>
            <span>영어로 2자이상 입력해주세요.</span>
          </div>
        </div>
        <div className={"common__hr"} />
      </article> */}

      {/* <article className={"common__article"}>
        <h2 className={"traveler__title"}>기타 예약 정보</h2>
        <div className={"traveler__inputForm"}>
          <label>오시는 교통 수단을 적어주세요.</label>
          <div>
            <textarea
              placeholder={"답변을 입력해주세요."}
              name={"etc"}
              value={params.etc}
              onChange={setStateOthers}
            />
          </div>
          <span>한글로 2자이상 입력해주세요.</span>
        </div>
      </article> */}

      <Etc setStateOthers={setStateOthers} paramsError={paramsErr.etc} />

      <div className={"common__boldHr"} />

      <article className={"common__article"}>
        <h2 className={"traveler__title"}>약관 동의</h2>
        <div className={"traveler__checkForm"}>
          <div className={"policy__checkBox total"}>
            <p />
            <span>전체 약관 동의</span>
          </div>
        </div>
        <div className={"traveler__checkForm detail"}>
          <div className={"policy__checkBox"}>
            <p />
            <span>여행자 약관 동의 (필수)</span>
          </div>
          <div className={"policy__checkBox"}>
            <p />
            <span>특가 항공권 및 할인 혜택 안내 동의 (선택)</span>
          </div>
        </div>
      </article>

      <article className={"common__article"}>
        <button className={"common__payButton"} onClick={submit}>
          결제하기
        </button>
      </article>
    </section>
  );
};

export default Container;
