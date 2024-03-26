import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './components/inicio.jsx';
import Login from './components/login.jsx'
import Registro from './components/registro.jsx'
import Navbar from './components/navbar.jsx';
import RecuperacionC from './components/recuperacionC.jsx'
import TablaUsuarios from './components/tablaUsuarios.jsx';  // Cambia la importación aquí

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/recuperacionC' element={<RecuperacionC />} />
        <Route path='/tablaUsuarios' element={<TablaUsuarios />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
