import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export const FullName = () => {
  const inicialStateValues = {
    firstName: "",
    lastName: "",
  };

  const [value, setValue] = useState(inicialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...value, [name]: value });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/address");
  };

  return (
    <div className="container">
      <h3 className="container__msg">
        Awesome! Let's get started with the basics.
      </h3>
      <input
        className="container__input"
        type="text"
        placeholder="FIRST NAME"
        name="firstName"
        onChange={handleInputChange}
        value={value.firstName}
      />
      <input
        className="container__input"
        type="text"
        placeholder="LAST NAME"
        name="lastName"
        onChange={handleInputChange}
        value={value.lastName}
      />
      <button className="container__button" onClick={handleClick}>
        NEXT
      </button>
      <label className="container__step">STEP 1 OF 4</label>
    </div>
  );
};
