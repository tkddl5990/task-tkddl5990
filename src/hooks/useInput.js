import { useState, useCallback, useContext } from "react";
import { OtherContext } from "../layouts/Container";

export const useTravelerInput = (initialState, err, fn, { cb, index }) => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(err);

  const handler = useCallback(
    (e) => {
      setState(e.target.value);
      setError(fn ? fn(e.target.value) : "");
      if (e.target.name.includes("|")) {
        const [name, idx] = e.target.name.split("|");
        cb(name, e.target.value, index);
      } else {
        cb(e.target.name, e.target.value, index);
      }
    },
    [fn, cb, index]
  );

  return [state, error, handler, setState, setError];
};

export const useOtherInput = (initialState, err, fn) => {
  const { setOtherState } = useContext(OtherContext);
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(err);

  const handler = useCallback(
    (e) => {
      setState(e.target.value);
      setError(fn ? fn(e.target.value) : "");
      if (setOtherState) setOtherState(e);
    },
    [fn, setOtherState]
  );

  return [state, error, handler, setState, setError];
};
