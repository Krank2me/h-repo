import React from "react";
import "./index.scss";

export const Welcome = () => {
  return (
    <div className="container">
      <h1 className="container__title">The Best TV service around!</h1>
      <h3 className="container__msg">
        Are you ready to enjoy ultra-best service?
      </h3>
      <button className="container__button">LET'S DO IT!</button>
    </div>
  );
};
