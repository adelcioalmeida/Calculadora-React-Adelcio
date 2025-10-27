import React from "react";
import styled from "styled-components";
import ButtonCalc from "./ButtonCalc";
import { useCalculator } from "../contexts/CalculatorContext";

const ButtonPanelContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const buttons = [
  "AC", "+/−", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "−",
  "1", "2", "3", "+",
  "0", ".", "="
];

export default function ButtonPanel() {
  const { handleButtonClick } = useCalculator();

  return (
    <ButtonPanelContainer>
      {buttons.map((label) => (
        <ButtonCalc
          key={label}
          label={label}
          onClick={() => handleButtonClick(label)}
        />
      ))}
    </ButtonPanelContainer>
  );
}