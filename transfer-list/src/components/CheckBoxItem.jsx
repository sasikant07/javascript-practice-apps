import React, { useId } from "react";

const CheckBoxItem = ({ label, onChange, checked }) => {
  const id = useId();

  return (
    <div className="transfer-list_section_items_item">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckBoxItem;
