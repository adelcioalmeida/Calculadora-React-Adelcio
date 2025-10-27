import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  text-align: center;
  background: #0b33b45e;
  color: #0ff7d0ff;
  padding: 16px 0;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
  border-bottom: 2px solid #0f1ff7ff;
`;

export default function Header() {
  return (
    <HeaderContainer>
      🔢 Calculadora React - Adelcio Dev ⚡
    </HeaderContainer>
  );
}