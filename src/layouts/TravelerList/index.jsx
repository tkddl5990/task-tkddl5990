import React from "react";
import TravelerItem from "../../components/Traveler";

const TravelerList = (props) => {
  const { traveler, deleteTravelerItem, setTravelerState, paramsError } = props;

  return (
    <>
      {traveler
        ? traveler.map((item, index) => (
            <TravelerItem
              key={`travelerItem-${index}`}
              deleteTravelerItem={
                index
                  ? traveler.length - 1 === index
                    ? deleteTravelerItem
                    : undefined
                  : undefined
              }
              setTravelerState={setTravelerState}
              material={{ cb: props.setTravelerState, index }}
              paramsError={paramsError[index]}
            />
          ))
        : null}
    </>
  );
};

export default React.memo(TravelerList);
