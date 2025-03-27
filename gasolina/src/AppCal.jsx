import React, { useState } from "react";
import AppTask from "./AppTask";

export default function AppCal() {
  const [alcoolPreco, setAlcoolPreco] = useState("");
  const [gasolinaPreco, setGasolinaPreco] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularMelhorOpcao() {
    if (alcoolPreco && gasolinaPreco) {
      if (alcoolPreco / gasolinaPreco < 0.7) {
        setResultado("Álcool é a melhor opção.");
      } else {
        setResultado("Gasolina é a melhor opção.");
      }
    } else {
      setResultado("Por favor, insira valores válidos.");
    }
  }

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
