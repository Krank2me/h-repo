import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export const FullName = () => {
  const inicialStateValues = {
    firstName: "",
    lastName: "",
  };

  const [valueName, setValueName] = useState(inicialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValueName({ ...valueName, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem("firstName", valueName.firstName);
    localStorage.setItem("lastName", valueName.lastName);
    navigate("/address");
  };

  return (
    <div className="container__fullName">
      <h3 className="container__msg">
        Awesome! Let's get started with the basics.
      </h3>
      <form className="container__fullName__form" onSubmit={handleSubmit}>
        <input
          className="container__input"
          type="text"
          placeholder="FIRST NAME"
          name="firstName"
          onChange={handleInputChange}
          value={valueName.firstName}
          required
        />
        <input
          className="container__input"
          type="text"
          placeholder="LAST NAME"
          name="lastName"
          onChange={handleInputChange}
          value={valueName.lastName}
          required
        />
        <button className="container__button" type="submit">
          NEXT
        </button>
      </form>
      <label className="container__step">STEP 1 OF 4</label>
    </div>
  );
};
