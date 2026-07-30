import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";

import './App.css'

function App() {
  const [paginaAtual, setPaginaAtual] = useState("home");

  return (
    <>
      <Header
        paginaAtual={paginaAtual}
        onChangePagina={setPaginaAtual}
      />

      <main>
        {paginaAtual === "home" && <Home />}

        {paginaAtual === "prod" && <h1>Página Produtividade</h1>}

        {paginaAtual === "horas" && <h1>Página Horas</h1>}
      </main>
    </>
  );
}


export default App
