import React from "react";

const AddButton = ({ addTravelerItem }) => {
  return (
    <button className={"addTravelerButton"} onClick={addTravelerItem}>
      <span className={"button__horizontal"} />
      <span className={"button__vertical"} />
    </button>
  );
};

export default React.memo(AddButton);
