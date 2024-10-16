import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  
  const [darkMode, setDarkMode] = useState(false);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  // Efecto para aplicar el modo oscuro en el documento
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Función para iniciar sesión
  const login = (token, name, userTelefono, userCorreo) => {
    setIsAuthenticated(true);
    setUserName(name);
    setTelefono(userTelefono);
    setCorreo(userCorreo);
    // Guarda el token en localStorage o en un estado seguro
    localStorage.setItem('authToken', token);
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsAuthenticated(false);
    setUserName('');
    setTelefono('');
    setCorreo('');
    // Remueve el token de localStorage o del estado seguro
    localStorage.removeItem('authToken');
  };

  // Valor del contexto
  return (
    <AuthContext.Provider value={{
      isAuthenticated, 
      userName, 
      telefono, 
      correo, 
      darkMode, 
      toggleDarkMode, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};
