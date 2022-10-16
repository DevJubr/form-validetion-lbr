import React from "react";
import styled from "styled-components";
import InptFeld from "../InputFeld/InputFeld";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  width: 23rem;
  justify-content: center;
  border: 0.3px solid #e8e8e8;
  gap: 0.6rem;
`;
const Lbl = styled.label`
  text-transform: capitalize;
  margin: 0.5rem 0.2rem;
`;
const ErrorMsg = styled.p`
  color: red;
  text-transform: lowercase;
  font-weight: 300;
`;

const InputGroup = ({
  label,
  placeholder,
  onChange,
  name,
  error,
  onFocus,
  onBlur,
}) => {
  return (
    <Container className="form-grp">
      <Lbl htmlFor="InptFeld">{label}</Lbl>
      <InptFeld
        name={name}
        id="InptFeld"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <ErrorMsg>{error}</ErrorMsg>
    </Container>
  );
};

export default InputGroup;
