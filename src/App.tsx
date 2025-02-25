import React from 'react';
import { BrowserRouter } from "react-router";
import Rotas from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <Rotas/>
    </BrowserRouter>
  );
}

export default App;
