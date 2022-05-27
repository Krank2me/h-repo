import React, { useState } from "react";
import { createUser } from "../../services/user";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export const Subscribe = () => {
  const inicialStateValues = {
    email: "",
    phone: "",
  };

  const [valueData, setValueData] = useState(inicialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValueData({ ...valueData, [name]: value });
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    localStorage.setItem("email", valueData.email);
    localStorage.setItem("phone", valueData.phone);
    const userData = {
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      address: localStorage.getItem("address"),
      apartment: localStorage.getItem("apartment"),
      plan: [
        {
          monthsFree: 1,
          label: "Premium",
          price: "50",
        },
      ],
      email: localStorage.getItem("email"),
      phone: localStorage.getItem("phone"),
    };
    const response = await createUser(userData);
    if (response.status === 201) {
      localStorage.clear();
      navigate("/");
    }
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
        value={valueData.firstName}
      />
      <input
        className="container__input"
        type="text"
        placeholder="PHONE NUMBER"
        name="phone"
        onChange={handleInputChange}
        value={valueData.lastName}
      />
      <button className="container__button" onClick={handleClick}>
        SUBSCRIBE NOW!
      </button>
      <label className="container__step">STEP 4 OF 4</label>
    </div>
  );
};
