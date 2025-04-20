import React from "react";
import { Routes, Route } from "react-router";
import CadastroAluno from "../pages/cadastro";
import ListarAlunos from "../pages/listarAlunos";
import Dashboard from "../pages/dashboard";

const Rotas = () => {
    return (
          <Routes>
            <Route path="/cadastroalunos" element={<CadastroAluno />} />
            <Route path="/listaralunos" element={<ListarAlunos />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
      );
}

export default Rotas;
