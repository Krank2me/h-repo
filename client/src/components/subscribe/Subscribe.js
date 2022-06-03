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

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("email", valueData.email);
    localStorage.setItem("phone", valueData.phone);
    const address = JSON.parse(localStorage.getItem("address"));
    const fullAddress = `${address.address}, ${address.city}, ${address.state}, ${address.postal}`;

    const userData = {
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      address: fullAddress,
      apartment: localStorage.getItem("apartment"),
      plan: localStorage.getItem("plan"),
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
      <form className="container__form" onSubmit={handleOnSubmit}>
        <input
          className="container__input"
          type="text"
          placeholder="EMAIL"
          name="email"
          onChange={handleInputChange}
          value={valueData.firstName}
          required
        />
        <input
          className="container__input"
          type="text"
          placeholder="PHONE NUMBER"
          name="phone"
          onChange={handleInputChange}
          value={valueData.lastName}
          required
        />
        <button className="container__button" type="submit">
          SUBSCRIBE NOW!
        </button>
      </form>
      <label className="container__step">STEP 4 OF 4</label>
    </div>
  );
};
