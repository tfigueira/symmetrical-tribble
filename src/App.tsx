import { BrowserRouter } from 'react-router'
import Rotas from './routes/routes'
import { CallMenu } from './Components/Menu'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <CallMenu/>
        <Rotas/>     
      </BrowserRouter>
    </div>
  )
}

export default App
