import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { findBuildingByQuery } from "../../services/buildings";
import { useNavigate } from "react-router-dom";
import { Building } from "../building/Building";
import "./index.scss";

export const Address = () => {
  const navigate = useNavigate();
  const [aptNumber, setAptNumber] = useState("");
  const [buildingList, setBuildingList] = useState([]);
  const [valueAddress, setValueAddress] = useState("");
  const [selectedItemValue, setSelectedItemValue] = useState("");

  const getAllBuildingsByQuery = async (query) => {
    const { data } = await findBuildingByQuery(query);
    setBuildingList(data);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValueAddress(value);
    if (e.target.value) {
      getAllBuildingsByQuery(e.target.value);
    }
  };

  const debouncedChangeHandler = useCallback(
    debounce(handleInputChange, 300),
    []
  );

  const handleClick = () => {
    localStorage.setItem("apartment", aptNumber);
    navigate("/plan");
  };

  const itemSelected = (item) => {
    if (item) {
      localStorage.setItem("address", JSON.stringify(item));
      const selected = `${item.address}, ${item.city}, ${item.state}, ${item.postal}`;
      setSelectedItemValue(selected);
    } else {
      setBuildingList([]);
      setValueAddress("");
      setSelectedItemValue("");
    }
  };

  console.log(selectedItemValue);

  return (
    <div className="container">
      <h3 className="container__msg">
        Plesure to meet you, Cristian! What is your install address?
      </h3>
      <div className="container__address">
        {selectedItemValue ? (
          <input
            className="container__street"
            type="text"
            placeholder="STREET ADDRES, CITY, STATE "
            name="address"
            onChange={debouncedChangeHandler}
            value={selectedItemValue}
          />
        ) : (
          <input
            className="container__street"
            type="text"
            placeholder="STREET ADDRES, CITY, STATE "
            name="address"
            onChange={debouncedChangeHandler}
          />
        )}

        <input
          className="container__apt"
          type="text"
          placeholder="APT #"
          name="apartment"
          onChange={(e) => {
            setAptNumber(e.target.value);
          }}
        />
      </div>
      {buildingList.length ? (
        <Building data={buildingList} onSelectedItem={itemSelected} />
      ) : null}
      <button className="container__button" onClick={handleClick}>
        YES!
      </button>
      <label className="container__step">STEP 2 OF 4</label>
    </div>
  );
};
