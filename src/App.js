import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/login.jsx'

import TablaUsuarios from './components/tablaUsuarios.jsx';  // Cambia la importación aquí

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        
        <Route path='/tablaUsuarios' element={<TablaUsuarios />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
