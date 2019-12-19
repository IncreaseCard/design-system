import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${props => (props.type === "red" ? "red" : "blue")};
  border: none;
  color: white;
  cursor: pointer;
  padding: 1rem;
  transition: 0.25s;
  &:hover {
    background: blueviolet;
  }
`;

const Button = ({ children, type }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
