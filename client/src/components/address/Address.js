import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export const Address = () => {
  const inicialStateValues = {
    address: "",
    apartment: "",
  };

  const [value, setValue] = useState(inicialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue({ ...value, [name]: value });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/plan");
  };

  return (
    <div className="container">
      <h3 className="container__msg">
        Plesure to meet you, Cristian! What is your install address?
      </h3>
      <div className="container__address">
        <input
          className="container__street"
          type="text"
          placeholder="STREET ADDRESS, CITY, STATE"
          name="address"
          onChange={handleInputChange}
          value={value.firstName}
        />
        <input
          className="container__apt"
          type="text"
          placeholder="APT #"
          name="apartment"
          onChange={handleInputChange}
          value={value.firstName}
        />
      </div>
      <button className="container__button" onClick={handleClick}>
        YES!
      </button>
      <label className="container__step">STEP 2 OF 4</label>
    </div>
  );
};
