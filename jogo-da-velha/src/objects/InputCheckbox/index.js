import React from "react";
import "./styles.css";

const InputCheckbox = ({ id, value, onClick, disabled }) => (
  <div className="input-checkbox">
    <input 
      className="input"
      id={id} 
      type="checkbox" 
      value={value} 
      onClick={onClick} 
      disabled={disabled} 
    />
    <label className="label" htmlFor={id}>
      {value}
    </label>
  </div>
);

export default InputCheckbox;
