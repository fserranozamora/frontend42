import './App.css'
//importamos componentes
import CompMostrarClientes from './componentes/CompMostrarClientes'
import CompCrearClientes from './componentes/CompCrearClientes'
import CompEditarClientes from './componentes/CompEditarClientes'
import CompFooter from './componentes/footer'
// Importamos Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return(
    <div className='App'>
      <header className='container'>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid"> <a className="navbar-brand" href="/login">LOGIN</a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item"><a href="/" className='nav-link'>INICIO</a></li>
        <li className="nav-item"><a className="nav-link" href="/clientes">Clientes</a></li>
        <li className="nav-item"><a className="nav-link" href="/productos">Productos</a></li>
        <li className="nav-item"><a className="nav-link" href="/proveedores">Proveedores</a></li>
      </ul>
    </div>
  </div>
</nav>


      </header>
      <BrowserRouter>
      <Routes>
      <Route path= '/clientes/' element={<CompMostrarClientes />} />
      <Route path= '/clientes/agregar' element={<CompCrearClientes />} />
      <Route path= '/clientes/editar/:id' element={<CompEditarClientes />} />
      </Routes>
      </BrowserRouter>
      <CompFooter>
        
      </CompFooter>
    </div>
  )
}

export default App
