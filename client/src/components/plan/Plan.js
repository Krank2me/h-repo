import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export const Plan = () => {
  const [value, setValue] = useState("");
  const [plans, setPlans] = useState([]);

  const handleInputChange = (e) => {
    console.log("value: ", e.target.value);
    setValue(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("holi");
    localStorage.setItem("plan", value);
    navigate("/subscribe");
  };

  useEffect(() => {
    const selectedItem = JSON.parse(localStorage.getItem("address"));
    setPlans(selectedItem.plans);
  }, []);

  return (
    <div className="container">
      <h3 className="container__msg">
        Please select the TV plan you want to enjoy:
      </h3>
      <form className="container__form" onSubmit={handleSubmit}>
        <div className="container__plan">
          {plans.map((planItem) => {
            return (
              <div className="container__plan__selected">
                <h1 className="container__plan__selected__space">
                  {planItem.label}
                </h1>
                <h3 className="container__plan__selected__space">Service</h3>
                <h1 className="container__plan__selected__space">
                  ${planItem.price}/mo
                </h1>
                <input
                  className="container__plan__selected__radio"
                  type="radio"
                  name="plan"
                  onChange={handleInputChange}
                  value={planItem.label}
                />
              </div>
            );
          })}
        </div>
        <button className="container__button" type="submit">
          I AM READY!
        </button>
      </form>
      <label className="container__step">STEP 3 OF 4</label>
    </div>
  );
};
