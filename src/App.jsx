import React from "react";
import styled from "styled-components";
import { CalculatorProvider } from "./contexts/CalculatorContext";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";

/* === Fundo da página (ajuste as cores se quiser) === */
const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #0c061ef5, #000303ff, #080210ff);
  display: flex;
  align-items: center;   /* centraliza vertical */
  justify-content: center; /* centraliza horizontal */
  padding: 32px 16px;
`;

/* Coluna que empilha calculadora e detalhes */
const Stack = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 520px;
  display: grid;
  gap: 20px;
`;

/* === O “quadro” da calculadora (bordas arredondadas + 3D) === */
const Card = styled.section`
  background: linear-gradient(145deg, #1c1c1c, #2a2a2a);
  border-radius: 20px;       /* bordas arredondadas */
  padding: 24px;
  border: 1px solid rgba(255,255,255,0.06);
  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.6),     /* sombra principal */
    0 0 15px rgba(77, 167, 136, 0.18),   /* leve brilho externo */
    inset 0 2px 6px rgba(98, 31, 31, 0.08); /* brilho interno */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px) scale(1.02);  /* “saindo da tela” */
    box-shadow:
      0 18px 45px rgba(0, 0, 0, 0.8),
      0 0 28px rgba(0, 255, 170, 0.28);
  }
`;

/* Título do card */
const Title = styled.h1`
  color: #afbcc4ff;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  margin: 6px 0 14px 0;
  letter-spacing: .3px;
`;

/* Caixa de detalhes abaixo (pode virar histórico depois) */
const Details = styled.div`
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 14px;
  color: #cfe8ff;
  font-size: 14px;
`;

export default function App() {
  return (
    <CalculatorProvider>
      <Page>
        <Stack>
          {/* CARD DA CALCULADORA */}
          <Card>
            <Title>Calculadora - Adelcio Dev ⚡</Title>
            {/* Largura da calculadora (diminua o maxWidth pra ficar menor) */}
            <div style={{ width: "100%", maxWidth:  350, margin: "0 auto" }}>
              <Display />
              <ButtonPanel />
            </div>
          </Card>

          {/* CARD DE DETALHES (embaixo) */}
          <Card>
            <Title>Detalhes</Title>
            <Details>
              Aqui você pode colocar um <b>histórico</b> de operações,
              atalhos de teclado, ou qualquer informação adicional.
            </Details>
          </Card>
        </Stack>
      </Page>
    </CalculatorProvider>
  );
}