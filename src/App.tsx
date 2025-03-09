import React, { useEffect,useState } from 'react';
import { BrowserRouter } from "react-router";
import Rotas from './routes/routes';
import CadastroAluno from './pages/cadastro';
import ListarAlunos from './pages/listarAlunos';
import { Button } from '@mui/material';

// function App() {
//   return (
//     <BrowserRouter>
//       <Rotas/>
//     </BrowserRouter>
//   );
// }

function App() {

  const [page, setPage] = useState<string>('CadastroAluno');

  const currentPath = window.location.pathname;

  useEffect(() => {
    console.log(currentPath);
  }, [currentPath]);

  return (
    <div>
      {/* <cadastroAluno/> */}
      <Button onClick={()=> setPage('CadastroAluno')}>Cadastro de Alunos</Button>
      <Button onClick={()=> setPage('listarAlunos')}>Listar Alunos</Button>
      <Button>Home</Button>
      {
        currentPath == "/CadastroAluno" &&
        //page == "CadastroAluno" &&
        <div>
          <CadastroAluno/>
        </div>
      }

      {
        currentPath == "/listarAlunos" &&
        //page == "listaralunos" &&
        <div>
          <ListarAlunos/>
        </div>
      }
    </div>
  );
}

export default App;
