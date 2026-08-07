import Header from "./components/Header";
import Home from "./components/Home";
import Prod from "./components/Prod";
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

        {paginaAtual === "prod" && <Prod/>}

        {paginaAtual === "horas" && <h1>Página Horas</h1>}
      </main>
    </>
  );
}


export default App
