import React from "react";
import styled from "styled-components";

function Button({ text, color, disabled = false }) {
  return (
    <Wrapper
      disabled={disabled}
      color={color === "default" ? "#ff5e00" : color}
    >
      {text}
    </Wrapper>
  );
}

export default Button;

// Style

const Wrapper = styled.button`
  margin-top: 5rem;
  padding: 0.5rem 2rem;
  border-radius: 15px;
  background-color: ${(props) => props.color};
  color: white;
  cursor: pointer;
  position: relative;
  box-shadow: 1px 1px 2px #ddd, -1px -1px 2px #eee;
`;
