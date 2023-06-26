import React from "react";

function Select({ text, name, options, handeonOnChange, value }) {
  return (
    <div>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option className="cardhome"></option>

        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
