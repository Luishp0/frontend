import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:8000/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo: values.email,
          contrasena: values.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar el token de autenticación en el local storage o en una cookie
        localStorage.setItem('token', data.token);
        // Redirigir al usuario a la página de inicio o dashboard
        navigate('/inicio');
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div className="body1">
      <div className="container">
        <h2>Iniciar sesión</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('Ingresa un correo válido').required('*Campos obligatorios'),
            password: Yup.string()
              .required('*Campos obligatorios')
              .min(8, 'Mínimo 8 caracteres'),
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="email">Correo Electrónico</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />

              <label htmlFor="password">Contraseña</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />

              {error && <div className="error-message">{error}</div>}

              <div className="button-container">
                <button type="submit" className="login-button">
                  Iniciar sesión
                </button>

                <Link to="/registro" className="register-button">
                  <button>
                    Registrar
                  </button>
                </Link>
              </div>

              <Link to="/recuperacionC" className="password-recovery-link">
                Recuperación de contraseña
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
