import React from "react";
import { Routes, Route } from "react-router";
import CadastroAluno from "../pages/cadastro";
import ListarAlunos from "../pages/listarAlunos";

const Rotas = () => {
    return (
          <Routes>
            <Route path="/cadastroalunos" element={<CadastroAluno />} />
            <Route path="/listaralunos" element={<ListarAlunos />} />
          </Routes>
      );
}

export default Rotas;
