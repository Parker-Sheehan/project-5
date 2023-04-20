import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayCountry } from "../store/slices/displayCountrySlice";
import { selectPotentials } from "../store/slices/potentialCountriesSlice";

const OptionDisplay = () => {
  let currentPotentials = useSelector(selectPotentials);
  console.log(currentPotentials);
  const dispatch = useDispatch();
  return (
    <div className="stack">
      {currentPotentials.map((country, index) => {
        return (
          <h2
            key={index}
            className="country-option"
            onClick={() => {
              dispatch(setDisplayCountry(currentPotentials[index]));
            }}
          >
            {country.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
