import React from "react";
import './RadioStyle.css';

const RadioButton = ({ label, value, checked, onChange }) => {
  return (
    <div className="radio-container">
      <label className="radio-label">
        {label}
        <input
          type="radio"
          name="radio"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span className="radio-checkmark"></span>
      </label>
    </div>
  );
};

export { RadioButton };