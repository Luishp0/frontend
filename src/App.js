import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login.jsx'
import InicioAdministrador from './components/inicioAdministrador.jsx';
import TablaUsuarios from './components/tablaUsuarios.jsx'; 
import Inicio from './components/inicio.jsx'; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/inicioAdministrador' element={<InicioAdministrador/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/tablaUsuarios' element={<TablaUsuarios />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
