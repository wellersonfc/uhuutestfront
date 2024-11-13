import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import Mapa from "./components/Mapa";
import "./styles/App.scss";

const App = () => {
  const [cliente, setCliente] = useState(null);

  const handleFormSubmit = (dados) => {
    setCliente(dados);
  };

  return (
    <div className="container">
      <h1>Cadastro de Cliente</h1>
      <div className="div1">
        <Formulario onSubmit={handleFormSubmit} />
      </div>
      <div className="div2">
        <Lista />
        </div>
      {cliente && (
        <div className="div3">
          <h3>Localização do Cliente:</h3>
          <Mapa latitude={parseFloat(cliente.latitude)} longitude={parseFloat(cliente.longitude)} />
        </div>
      )}
    </div>
  );
};

export default App;
