import React from "react";

const PayButton = ({ policy, submit }) => {
  return (
    <article className={"common__article"}>
      <button
        className={`common__payButton ${policy === "true" ? "onActive" : null}`}
        disabled={policy === "true" ? false : true}
        onClick={submit}
      >
        결제하기
      </button>
    </article>
  );
};

export default React.memo(PayButton);
