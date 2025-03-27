import React from "react";
import logo from "./assets/logo.png";
import "./App.css";

export default function AppTask({
  alcoolPreco,
  gasolinaPreco,
  onAlcoolChange,
  onGasolinaChange,
}) {
  return (
    <div className="container">
      <h1>Qual melhor opção?</h1>
      <img className="logo" src={logo} alt="bomba de combustivel" />

      <main>
        <label>Preço do Álcool (R$):</label>
        <input
          type="number"
          name=""
          id=""
          value={alcoolPreco}
          onChange={(e) => onAlcoolChange(e.target.value)}
        />

        <label>Preço da Gasolina (R$):</label>
        <input
          type="number"
          name=""
          id=""
          value={gasolinaPreco}
          onChange={(e) => onGasolinaChange(e.target.value)}
        />
      </main>
      <button onClick={onCalcular}>Calcular</button>
    </div>
  );
}
