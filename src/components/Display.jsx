import React from "react";
import { useCalculator } from "../contexts/CalculatorContext";

export default function Display() {
  const { displayValue } = useCalculator();
  return (
    <div
      style={{
        background: "#000000ff",
        color: "rgba(199, 224, 234, 1)",
        fontSize: 40,
        padding: "18px 14px",
        borderRadius: 10,
        textAlign: "right",
        marginBottom: 12
      }}
    >
      {displayValue}
    </div>
  );
}