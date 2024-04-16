import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logotra from '../img/logotra.png';
import { MdLockOutline } from 'react-icons/md';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NewPasswordForm = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const correo = location.state?.correo || ''; // Obtén el correo electrónico del estado de ubicación


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('http://localhost:8000/usuario/resetcontrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          correo,
          password: values.password,
          confirmPassword: values.confirmPassword,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        setTimeout(() => {
          navigate('/login'); // Redirige al usuario al inicio después de restablecer la contraseña
        }, 1000); // Redirige al usuario al inicio después de 2 segundos
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage('Error al restablecer la contraseña.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-1">
          <img src={logotra} alt="Logo" className="w-20 h-20" />
          <h2 className="mt-6 text-xl font-bold text-center text-gray-600">AcuaCode</h2>
        </div>

        <h2 className="mt-1 text-xl font-bold text-center text-gray-900">Ingresar Nueva Contraseña</h2>

        <p className="mt-3 text-sm text-center text-gray-600">
          Su nueva contraseña debe ser diferente de la contraseña utilizada anteriormente.
        </p>

        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={Yup.object({
            password: Yup.string()
              .required('*Campo requerido')
              .min(8, 'La contraseña debe tener al menos 8 caracteres')
              .matches(/^(?=.*[a-z])(?=.*[A-Z])/, 'La contraseña debe contener al menos un carácter en mayúscula y minúscula')
              .matches(/\d/, 'La contraseña debe contener al menos un número')
              .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, 'La contraseña debe contener al menos un carácter especial'),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
              .required('*Campo requerido'),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="mb-4">
                <div className="flex items-center px-5 py-3 bg-gray-100 rounded">
                  <MdLockOutline className="mr-2 text-gray-400" />
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    className="flex-1 text-sm text-gray-600 bg-transparent outline-none"
                    placeholder="Contraseña"
                  />
                </div>
                <ErrorMessage name="password" component="div" className="mt-1 text-xs text-red-500" />
              </div>

              <div className="mb-4">
                <div className="flex items-center px-5 py-3 bg-gray-100 rounded">
                  <MdLockOutline className="mr-2 text-gray-400" />
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    className="flex-1 text-sm text-gray-600 bg-transparent outline-none"
                    placeholder="Confirmar Contraseña"
                  />
                </div>
                <ErrorMessage name="confirmPassword" component="div" className="mt-1 text-xs text-red-500" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex justify-center w-full py-3 mb-4 text-sm font-bold text-white transition-colors rounded bg-gradient-to-r from-customBlue to-customTurquoise"
              >
                Restablecer Contraseña
              </button>
            </Form>
          )}
        </Formik>

        {message && <p className="text-center text-red-500">{message}</p>}

        <div className="text-center mt-4">
          <Link to="/login" className="text-customBlue hover:underline">
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewPasswordForm;
