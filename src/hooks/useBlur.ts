import { FocusEvent, useCallback, useState } from "react";

type Validation = {
  initialState: string;
  index?: number;
  validationFc: (state: string) => string;
  cb: (e: FocusEvent<HTMLInputElement>, index: number) => void;
};

type ReturnTypes = [string, (e: FocusEvent<HTMLInputElement>) => void];

const useBlur = ({
  initialState,
  validationFc,
  index = 0,
  cb,
}: Validation): ReturnTypes => {
  const [message, setMessage] = useState(initialState);

  const handler = useCallback((e: FocusEvent<HTMLInputElement>) => {
    const msg = validationFc((e.target.value as unknown) as string);
    if (index >= 0 && msg === "") {
      cb(e, index);
    }
    setMessage(msg);
  }, []);

  return [message, handler];
};

export default useBlur;
