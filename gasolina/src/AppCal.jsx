import React, { useState } from "react";
import AppTask from "./AppTask";

export default function AppCal() {
  const [alcoolPreco, setAlcoolPreco] = useState("");
  const [gasolinaPreco, setGasolinaPreco] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularMelhorOpcao = () => {
    const alcool = parseFloat(alcoolPreco.replace(",", "."));
    const gasolina = parseFloat(gasolinaPreco.replace(",", "."));

    if (isNaN(alcool) || isNaN(gasolina)) {
      setResultado("Por favor, insira um valor válido.");
      return;
    }

    const proporcao = alcool / gasolina;

    if (proporcao < 0.7) {
      setResultado("Álcool é a melhor opção.");
    } else {
      setResultado("Gasolina é a melhor opção.");
    }
  };
  return (
    <>
      <AppTask
        alcoolPreco={alcoolPreco}
        gasolinaPreco={gasolinaPreco}
        onAlcoolChange={setAlcoolPreco}
        onGasolinaChange={setGasolinaPreco}
        onCalcular={calcularMelhorOpcao}
      />
      <h2>{resultado}</h2>
    </>
  );
}
