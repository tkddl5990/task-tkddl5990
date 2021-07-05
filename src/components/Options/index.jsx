import React from "react";

export const HourOptions = React.memo(() => {
  return Array.from({ length: 24 }, () => "hour").map((item, index) => (
    <option
      key={`${item}-${index}`}
      value={`${index}시`}
    >{`${index}시`}</option>
  ));
});

export const MinOptions = React.memo(() => {
  return Array.from({ length: 60 }, () => "minute").map((item, index) => (
    <option
      key={`${item}-${index}`}
      value={`${index}분`}
    >{`${index}분`}</option>
  ));
});
