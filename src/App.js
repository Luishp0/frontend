import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext'; // Importa el AuthProvider
import Login from './components/login.jsx';
import Profile from './components/profile.jsx';
import InicioAdministrador from './components/inicioAdministrador.jsx';
import TablaUsuarios from './components/tablaUsuarios.jsx'; 
import Inicio from './components/inicio.jsx'; 
import Compras from './components/compras.jsx'; 
import Infoma from './components/infoma.jsx'; 
import Filtros from './components/filtros.jsx'; 
import Sensores from './components/sensores.jsx'; 
import Internoprofile from './components/internoprofile';
import Nextcompra from './components/nextcompra.jsx'; 
import Secondcompra from './components/secondcompra.jsx'; 
import Respaldo from './components/respaldo.jsx';
import Todasgraficas from './components/todasgraficas.jsx';
import Graficastodas from './components/graficastodas.jsx';
import FavoritasGraficas from './components/favoritasGraficas.jsx';
import Registro from './components/registro.jsx';
import Recuperacion from './components/enviarCorreoRecuperacion.jsx';
import ResetPasswordScreen from './components/restablecerContrasena.jsx';
import CodigoVerificacion from './components/verificarCodigoRecuperacion.jsx';
import TablaPeceras from './components/tablaPeceras.jsx';
import Actualizador from './components/actualizador.jsx';
import Notificaciones from './components/notificaciones.jsx';
import Actializardatos from './components/Actualizardatos.jsx';
import AvisoPrivacidad from './components/avisoPrivacidad.jsx';
import { FavoritosProvider } from './components/FavoritosContext.js'; // Importa el proveedor de contexto

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FavoritosProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/actualizardatos' element={<Actializardatos />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/notificaciones' element={<Notificaciones />} />
            <Route path='/inicioAdministrador' element={<InicioAdministrador />} />
            <Route path='/inicio' element={<Inicio />} />
            <Route path='/internoprofile' element={<Internoprofile />} />
            <Route path='/compras' element={<Compras />} />
            <Route path='/infoma' element={<Infoma />} />
            <Route path='/filtros' element={<Filtros />} />
            <Route path='/sensores' element={<Sensores />} />
            <Route path='/nextcompra' element={<Nextcompra />} />
            <Route path='/secondcompra' element={<Secondcompra />} />
            <Route path='/' element={<Inicio />} />
            <Route path='/todasgraficas' element={<Todasgraficas />} />
            <Route path='/tablausuarios' element={<TablaUsuarios />} />  
            <Route path='/respaldo' element={<Respaldo />} />
            <Route path='/graficasfavoritas' element={<FavoritasGraficas />} />
            <Route path='/graficastodas' element={<Graficastodas />} />
            <Route path='/tablapeceras' element={<TablaPeceras />} />
            <Route path='/recuperacion' element={<Recuperacion />} />
            <Route path='/codigo' element={<CodigoVerificacion />} />
            <Route path='/actualizador' element={<Actualizador />} />
            <Route path='/reset-contrasena' element={<ResetPasswordScreen />} />
            <Route path='/avisoPrivacidad' element={<AvisoPrivacidad />} />
          </Routes>
        </FavoritosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
