import React, { useEffect, useState } from "react";
import { getBuildings } from "../../services/buildings";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export const Address = () => {
  const inicialStateValues = {
    address: "",
    apartment: "",
  };

  const [valueAddress, setValueAddress] = useState(inicialStateValues);

  const getAllBuildings = async () => {
    const response = await getBuildings();
    setValueAddress(response);
  };

  useEffect(() => {
    getAllBuildings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValueAddress({ ...valueAddress, [name]: value });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("address", valueAddress.address);
    localStorage.setItem("apartment", valueAddress.apartment);
    navigate("/plan");
  };

  return (
    <div className="container">
      <h3 className="container__msg">
        Plesure to meet you, Cristian! What is your install address?
      </h3>
      <div className="container__address">
        <select
          className="container__street"
          name="address"
          value={valueAddress.address}
          onChange={handleInputChange}
        >
          {valueAddress?.data?.map((item) => {
            return (
              <option
                key={item._id}
                value={`${item.name} - ${item.address}, ${item.city}, ${item.state}`}
              >
                {item.name} - {item.address}, {item.city}, {item.state}
              </option>
            );
          })}
        </select>

        <input
          className="container__apt"
          type="text"
          placeholder="APT #"
          name="apartment"
          onChange={handleInputChange}
          value={valueAddress.apartment}
        />
      </div>
      <button className="container__button" onClick={handleClick}>
        YES!
      </button>
      <label className="container__step">STEP 2 OF 4</label>
    </div>
  );
};
