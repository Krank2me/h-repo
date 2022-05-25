import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export const Subscribe = () => {
  const inicialStateValues = {
    email: "",
    phone: "",
  };

  const [value, setValue] = useState(inicialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...value, [name]: value });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="container__title">Great news! Your first month's free!</h1>
      <h3 className="container__msg">
        To get set up, just provide your email and phone number and we can
        remind you when the free trial ends.
      </h3>
      <input
        className="container__input"
        type="text"
        placeholder="EMAIL"
        name="email"
        onChange={handleInputChange}
        value={value.firstName}
      />
      <input
        className="container__input"
        type="text"
        placeholder="PHONE NUMBER"
        name="phone"
        onChange={handleInputChange}
        value={value.lastName}
      />
      <button className="container__button" onClick={handleClick}>
        SUBSCRIBE NOW!
      </button>
      <label className="container__step">STEP 4 OF 4</label>
    </div>
  );
};
