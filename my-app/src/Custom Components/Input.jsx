import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Input(props) {
  const { width, lebel, type, what, handleSignInChange } = props.props;
  const [isFocused, setisFocused] = useState(false);
  const [value, setvalue] = useState("");

  return (
    <Wrapper
      isFocused={isFocused ? "blue" : "black"}
      style={{ width: `${width}%` }}
    >
      <Lebel
        aria-label="input"
        size={isFocused ? 12 : 16}
        color={isFocused ? "blue" : "#666"}
        bottom={isFocused ? 1.5 : 0.2}
        htmlFor={lebel}
      >
        {lebel}
      </Lebel>
      <input
        type={type}
        onFocus={() => setisFocused(true)}
        onBlur={() => setisFocused(false)}
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
    </Wrapper>
  );
}

export default Input;

// Styles

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & input {
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #777777;
    padding: 0.3rem;
  }

  & input:focus {
    outline: none;
    border-bottom: 1px solid blue;
  }
`;

const Lebel = styled.div`
  position: absolute;
  left: 0.2rem;
  transition: all 0.2s ease-in-out;
  bottom: ${(props) => props.bottom}rem;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
`;
