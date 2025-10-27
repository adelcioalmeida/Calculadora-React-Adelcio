import { createContext, useContext, useState } from "react";

// Cria o contexto com valores e funções que os componentes vão usar
export const CalculatorContext = createContext({
  displayValue: "0",
  handleButtonClick: () => {},
});

export function CalculatorProvider({ children }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  function normalize(label) {
    if (label === "x" || label === "X" || label === "*") return "×";
    if (label === "-" || label === "–") return "−";
    if (label === "/") return "÷";
    if (label === "AC") return "CA";
    if (label === "+/-" || label === "+∕−") return "±";
    return label;
  }

  function calculate(a, b, op) {
    const x = parseFloat(a);
    const y = parseFloat(b);
    switch (op) {
      case "+": return x + y;
      case "−": return x - y;
      case "×": return x * y;
      case "÷": return y === 0 ? "∞" : x / y;
      default:  return y;
    }
  }

  function handleButtonClick(raw) {
    const label = normalize(raw);

    if (label === "CA") {
      setDisplayValue("0");
      setFirstValue(null);
      setOperator(null);
      setWaitingForSecondValue(false);
      return;
    }

    if (label === "±") {
      setDisplayValue((curr) => (curr === "0" ? "0" : (curr.startsWith("-") ? curr.slice(1) : "-" + curr)));
      return;
    }

    if (label === "%") {
      setDisplayValue((curr) => String(parseFloat(curr) / 100));
      return;
    }

    if (label === ".") {
      setDisplayValue((curr) => (curr.includes(".") ? curr : curr + "."));
      return;
    }

    if (["+","−","×","÷"].includes(label)) {
      if (operator && !waitingForSecondValue) {
        const result = calculate(firstValue ?? displayValue, displayValue, operator);
        setDisplayValue(String(result));
        setFirstValue(String(result));
      } else {
        setFirstValue(displayValue);
      }
      setOperator(label);
      setWaitingForSecondValue(true);
      return;
    }

    if (label === "=") {
      if (operator && firstValue !== null) {
        const result = calculate(firstValue, displayValue, operator);
        setDisplayValue(String(result));
        setFirstValue(null);
        setOperator(null);
        setWaitingForSecondValue(false);
      }
      return;
    }

    if (/^\d$/.test(label)) {
      setDisplayValue((curr) => {
        if (waitingForSecondValue) {
          setWaitingForSecondValue(false);
          return label;
        }
        if (curr === "0") return label;
        return curr + label;
      });
      return;
    }
  }

  const value = { displayValue, handleButtonClick };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  return useContext(CalculatorContext);
}