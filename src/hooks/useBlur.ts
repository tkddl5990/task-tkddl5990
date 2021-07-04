import { FocusEvent, useCallback, useState } from "react";

type Validation<T> = {
  initialState: T;
  validationFc: (state: T) => T;
};

type ReturnTypes<T> = [
  T,
  (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
];

const useBlur = <T>({
  initialState,
  validationFc,
}: Validation<T>): ReturnTypes<T> => {
  const [message, setMessage] = useState(initialState);

  const handler = useCallback(
    (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const msg = validationFc((e.target.value as unknown) as T);
      setMessage(msg);
    },
    []
  );

  return [message, handler];
};

export default useBlur;
