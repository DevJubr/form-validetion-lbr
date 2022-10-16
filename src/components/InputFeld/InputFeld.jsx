import React from "react";
// import styled form 'styled-component'
import style from "styled-components";
const InputFeld = style.input`
  border: none;
  outline: none;
  padding: 0.8rem 1rem;
  background: #e1e1e1;
  border-radius: 0.6rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  `;
const Form = ({ placeholder, onChange, name, onFocus, onBlur }) => {
  return (
    <InputFeld
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    ></InputFeld>
  );
};

export default Form;
