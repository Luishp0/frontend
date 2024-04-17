import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login.jsx'
import { AuthProvider } from './components/AuthContext.jsx';
import InicioAdministrador from './components/inicioAdministrador.jsx';
import TablaUsuarios from './components/tablaUsuarios.jsx'; 
import Inicio from './components/inicio.jsx'; 
import Compras from './components/compras.jsx'; 
import Infoma from './components/infoma.jsx'; 
import Filtros from './components/filtros.jsx'; 
import Sensores from './components/sensores.jsx'; 
import Nextcompra from './components/nextcompra.jsx'; 
import Secondcompra from './components/secondcompra.jsx'; 
import Respaldo from './components/respaldo.jsx';
import Registro from './components/registro.jsx'
import Recuperacion from './components/enviarCorreoRecuperacion.jsx'
import ResetPasswordScreen from './components/restablecerContrasena.jsx'
import CodigoVerificacion from './components/verificarCodigoRecuperacion.jsx'
import FavoritasGraficas from './components/favoritasGraficas.jsx'
import TablaPeceras from './components/tablaPeceras.jsx';
import AvisoPrivacidad from './components/avisoPrivacidad.jsx'

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/inicioAdministrador' element={<InicioAdministrador/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/compras' element={<Compras/>}/>
        <Route path='/infoma' element={<Infoma/>}/>
        <Route path='/filtros' element={<Filtros/>}/>
        <Route path='/sensores' element={<Sensores/>}/>
        <Route path='/nextcompra' element={<Nextcompra/>}/>
        <Route path='/secondcompra' element={<Secondcompra/>}/>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/tablausuarios' element={<TablaUsuarios />} />  
        <Route path='/respaldo' element={<Respaldo/>}/>
        <Route path='/graficasfavoritas' element={<FavoritasGraficas/>}/>
        <Route path='/tablapeceras' element={<TablaPeceras/>}/>
        <Route path='/recuperacion' element={<Recuperacion/>}/>
        <Route path='/codigo' element={<CodigoVerificacion/>}/>
        <Route path='/reset-contrasena' element={<ResetPasswordScreen/>}/>
        <Route path='/avisoPrivacidad' element={<AvisoPrivacidad/>}/>
        

      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
