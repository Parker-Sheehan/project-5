import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../store/slices/displayCountrySlice";

const Symbol = () => {
  const currentCountry = useSelector(selectDisplay);
  return (
    <div className="symbols">
      <div className="stack">
        <h2>
          Flag of {currentCountry.name.common}:
          {currentCountry.flags ? (
            <img src={currentCountry.flags.png} />
          ) : (
            "data not founf"
          )}
        </h2>
      </div>
      <div className="stack">
        <h2>
          Coat of Arms {currentCountry.name.common}
          {currentCountry.coatOfArms ? (
            <img src={currentCountry.coatOfArms.png} />
          ) : (
            "(No data founf)"
          )}
        </h2>
      </div>
    </div>
  );
};

export default Symbol;
