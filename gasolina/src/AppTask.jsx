import React from "react";
import "./App.css";

export default function AppTask({
  alcoolPreco,
  gasolinaPreco,
  onAlcoolChange,
  onGasolinaChange,
  onCalcular,
}) {
  return (
    <div className="container">
      <h1>Qual melhor opção?</h1>

      <label>Preço do Álcool (R$):</label>
      <input
        type="text"
        value={alcoolPreco}
        onChange={(e) => onAlcoolChange(e.target.value)}
      />

      <label>Preço da Gasolina (R$):</label>
      <input
        type="text"
        value={gasolinaPreco}
        onChange={(e) => onGasolinaChange(e.target.value)}
      />

      <button onClick={onCalcular}>Calcular</button>
    </div>
  );
}
