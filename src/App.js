import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login.jsx'
import InicioAdministrador from './components/inicioAdministrador.jsx';
import TablaUsuarios from './components/tablaUsuarios.jsx'; 
import Inicio from './components/inicio.jsx'; 
import Compras from './components/compras.jsx'; 
import Infoma from './components/infoma.jsx'; 
import Filtros from './components/filtros.jsx'; 
import Respaldo from './components/respaldo.jsx';
import Registro from './components/registro.jsx'
import Recuperacion from './components/PasswordRecovery.jsx'
import ActualizarContrasena from './components/ResetPasswordScreen.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/inicioAdministrador' element={<InicioAdministrador/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/compras' element={<Compras/>}/>
        <Route path='/infoma' element={<Infoma/>}/>
        <Route path='/filtros' element={<Filtros/>}/>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/tablausuarios' element={<TablaUsuarios />} />  
        <Route path='/respaldo' element={<Respaldo/>}/>
        <Route path='/recuperacion' element={<Recuperacion/>}/>
        <Route path='/actualizar' element={<ActualizarContrasena/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
