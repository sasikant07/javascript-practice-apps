import React, { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import "./filter.css";
import { reset, setRegion } from "../../../features/countries/countriesSlice";

const Filter = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [filter, setFilter] = useState("");
  const [disaplayDropdown, setDispalyDropdown] = useState(false);

  
  const dispatch = useDispatch();

  const handleDropdown = () => {
    setDispalyDropdown(!disaplayDropdown);
  }

  useEffect(() => {
    if (filter !== "") {
      dispatch(setRegion(filter.toLowerCase()));
    }

    return () => {
      return reset();
    }
  }, [dispatch, filter])

  return (
    <section className="filter-container">
      <div className="filter" onClick={handleDropdown}>
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <i className="fa-solid fa-angle-down"></i>
      </div>
      {disaplayDropdown ? (
        <div className="dropdown">
          {regions.map((item, index) => {
            return (
              <div key={index} className="dropdown-item" onClick={() => {
                setFilter(item);
                handleDropdown()
              }}>{item}</div>
            )
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;