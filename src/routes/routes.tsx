import React from "react";
import { Routes, Route } from "react-router";
import CadastroAluno from "../pages/cadastro";

const Rotas = () => {
    return (
          <Routes>
            <Route path="/cadastroalunos" element={<CadastroAluno />} />
          </Routes>
      );
}

export default Rotas;
