import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/fullName");
  };

  return (
    <div className="container">
      <h1 className="container__title">The Best TV service around!</h1>
      <h3 className="container__msg">
        Are you ready to enjoy ultra-best service?
      </h3>
      <button className="container__button" onClick={handleClick}>
        LET'S DO IT!
      </button>
    </div>
  );
};
