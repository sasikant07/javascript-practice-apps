import React from "react";
import CheckBoxItem from "./CheckBoxItem";

const ItemsList = ({ items, setItems }) => {

  const handleChange = (label) => {
    setItems((prevItems) => ({
      ...prevItems,
      [label]: !prevItems[label],
    }));
  };

  return (
    <div className="transfer-list_section">
      <ul className="transfer-list_section_items">
        {Object.entries(items).map(([label, checked]) => (
          <li key={label}>
            <CheckBoxItem
              label={label}
              checked={checked}
              onChange={() => handleChange(label)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
