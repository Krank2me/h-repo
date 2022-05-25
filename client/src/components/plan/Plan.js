import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export const Plan = () => {
  const inicialStateValues = {
    basic: "basic",
    premium: "premium",
    isCheked: false,
  };

  const [value, setValue] = useState(inicialStateValues);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/subscribe");
  };

  return (
    <div className="container">
      <h3 className="container__msg">
        Please select the TV plan you want to enjoy:
      </h3>
      <div className="container__plan">
        <div className="container__plan__selected">
          <h1 className="container__plan__selected__space">Basic</h1>
          <h3 className="container__plan__selected__space">Service</h3>
          <h1 className="container__plan__selected__space">$30/mo</h1>
          <input
            className="container__plan__selected__radio"
            type="radio"
            name="basic"
            onChange={handleInputChange}
            value={value.basic}
          />
        </div>
        <div className="container__plan__selected">
          <h1 className="container__plan__selected__space">Premium</h1>
          <h3 className="container__plan__selected__space">Service</h3>
          <h1 className="container__plan__selected__space">$50/mo</h1>
          <input
            className="container__plan__selected__radio"
            type="radio"
            name="premium"
            onChange={handleInputChange}
            value={value.premium}
          />
        </div>
      </div>
      <button className="container__button" onClick={handleClick}>
        I AM READY!
      </button>
      <label className="container__step">STEP 3 OF 4</label>
    </div>
  );
};
