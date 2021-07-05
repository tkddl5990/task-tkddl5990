import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

type ReturnTypes<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>
];

const useInput = <T>(initialState: T): ReturnTypes<T> => {
  const [state, setState] = useState<T>(initialState);

  const handler = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setState((e.target.value as unknown) as T);
    },
    []
  );

  return [state, handler, setState];
};

export default useInput;
