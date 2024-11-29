import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext();

// Proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Al cargar la aplicación, verificar si hay datos en sessionStorage
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Función para iniciar sesión
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8000/usuario/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      const data = await response.json();

      // Guardar los datos del usuario en el estado y en sessionStorage
      const userData = {
        token: data.result.token,
        id: data.result.id,
        nombre: data.result.nombre,
        correo: data.result.correo,
        roles_idroles: data.result.roles_idroles,
      };

      setUser(userData);
      sessionStorage.setItem('user', JSON.stringify(userData));
      sessionStorage.setItem('authToken', data.result.token);

      // Retornar éxito
      return { success: true, data: userData };
    } catch (error) {
      console.error('Error en la solicitud de inicio de sesión:', error);
      return { success: false, message: error.message };
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('user'); // Eliminar datos de sessionStorage
    sessionStorage.removeItem('authToken');
  };

  // Saber si el usuario está autenticado
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};

