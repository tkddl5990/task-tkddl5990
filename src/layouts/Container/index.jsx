import React, {
  useEffect,
  useCallback,
  useState,
  createContext,
  useMemo,
} from "react";
import TravelerList from "../TravelerList";
import Time from "../../components/Time";
import Phone from "../../components/Phone";
import Etc from "../../components/Etc";
import Policy from "../../components/Policy";
import AddButton from "../../components/AddButton";
import PayButton from "../../components/PayButton";
import { otherValidation, resultValidation } from "../../validation";

const TravelerObj = {
  lastName: "",
  firstName: "",
  nameKo: "",
  gender: "",
  birth: "",
};

export const OtherContext = createContext({
  setOtherState: () => {},
});

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

  useEffect(() => addTravelerItem(), []);

  const addTravelerItem = useCallback(() => {
    setParams((prev) => ({
      ...prev,
      traveler: [...prev.traveler, TravelerObj],
    }));
  }, []);

  const deleteTravelerItem = useCallback(() => {
    setParams((prev) => {
      return {
        ...prev,
        traveler: prev.traveler.filter(
          (item, index) => prev.traveler.length - 1 !== index
        ),
      };
    });
  }, []);

  const setTravelerState = useCallback((key, value, index) => {
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

  const setOtherState = useCallback((e) => {
    e.persist();
    setParams((prev) => {
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
          [e.target.name]: e.target.value || e.target.checked,
        };
      }
    });
  }, []);

  const submit = useCallback(() => {
    const [isValidTraveler, isTravelerSuccess] = resultValidation(
      params.traveler
    );
    const [isValidationOthers, isOthersSuccess] = otherValidation(params);

    if (!isTravelerSuccess || !isOthersSuccess) {
      setParamsErr((prev) => {
        return {
          ...prev,
          traveler: !isTravelerSuccess ? isValidTraveler : prev.traveler,
          time: {
            hour: isValidationOthers.isValidHour,
            min: isValidationOthers.isValidMin,
          },
          phone: {
            name: isValidationOthers.isValidUserName,
            tel: isValidationOthers.isValidPhone,
          },
          etc: isValidationOthers.isValidEtc,
        };
      });
    } else {
      alert("????????? ?????? ???????????????.");
    }
  }, [params]);

  const value = useMemo(() => ({ setOtherState }), [setOtherState]);

  return (
    <section className={"layout__section"}>
      <TravelerList
        traveler={params.traveler}
        deleteTravelerItem={deleteTravelerItem}
        setTravelerState={setTravelerState}
        paramsError={paramsErr.traveler}
      />
      <AddButton addTravelerItem={addTravelerItem} />
      <OtherContext.Provider value={value}>
        <Time paramsError={paramsErr.time} />
        <Phone paramsError={paramsErr.phone} />
        <Etc paramsError={paramsErr.etc} />
        <div className={"common__boldHr"} />
        <Policy />
      </OtherContext.Provider>
      <PayButton policy={params.policy} submit={submit} />
    </section>
  );
};

export default Container;
