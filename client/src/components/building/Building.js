import React, { Fragment, useState } from "react";
import "./index.scss";

export const Building = ({ data, onSelectedItem }) => {
  const [itemSelected, setItemSelected] = useState(null);

  const handleClick = (item) => {
    onSelectedItem(item);
    setItemSelected(item);
  };

  const handleClear = () => {
    onSelectedItem(null);
    setItemSelected(null);
  };

  return (
    <>
      {!itemSelected && data.length ? (
        <>
          {data.map((item) => {
            return (
              <div className="card-container" key={item._id}>
                <div className="container__info">
                  <h3 className="container__info__title">{item.name}</h3>
                  <p className="container__info__street">
                    {`${item.address}, ${item.city}, ${item.state}, ${item.postal}`}
                  </p>
                </div>
                <div className="container__button-select">
                  <button
                    className="card-container__button"
                    onClick={() => handleClick(item)}
                  >
                    Select
                  </button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div className="card-container">
          <div className="container__info">
            <h3 className="container__info__title">{itemSelected.name}</h3>
            <p className="container__info__street">
              {`${itemSelected.address}, ${itemSelected.city}, ${itemSelected.state}, ${itemSelected.postal}`}
            </p>
          </div>
          <div className="container__button-select">
            <button className="card-container__button" onClick={handleClear}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
