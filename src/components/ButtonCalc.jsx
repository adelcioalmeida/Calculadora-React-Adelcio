import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #353c9fff;
  color: #fff;
  border: none;
  font-size: 24px;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #2f638dff;
  }
`;

export default function ButtonCalc({ label, onClick }) {
  return <Button onClick={onClick}>{label}</Button>;
}