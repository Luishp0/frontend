import React, { useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaRegEnvelope } from 'react-icons/fa';
import logotra from '../img/logotra.png';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './navbarRegresar';

const EnviarCorreoRecuperacion = () => {
  const navigate = useNavigate();
  const timerRef = useRef(null);
  const [alert, setAlert] = React.useState(null);

  const handleSubmit = async (values, actions) => {
    try {
      const response = await fetch('http://localhost:8000/usuario/enviarcorreo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo: values.email }),
      });

      const data = await response.json();

      if (response.ok) {
        setAlert({ type: 'success', message: 'Correo enviado correctamente: ' + data.message });
        timerRef.current = setTimeout(() => {
          navigate('/codigo', { state: { correo: values.email } }); // Pasa el correo electrónico al estado de ubicación
        }, 1000); // Redirige al usuario al inicio después de 1 segundo
      } else {
        setAlert({ type: 'error', message: 'Error al enviar el correo: ' + (data.message || 'Ocurrió un error') });
        actions.setSubmitting(false);
      }
    } catch (error) {
      setAlert({ type: 'error', message: 'Error al enviar el correo: ' + error });
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Formato de correo electrónico inválido').required('El correo electrónico es requerido'),
  });

  return (
    <div>
      <Navbar linkTo='/login' />
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-3">
          <img src={logotra} alt="Logo" className="w-20 h-20" />
          <h2 className="mt-6 text-xl font-bold text-center text-gray-600">AcuaCode</h2>
        </div>
        <h2 className="mt-6 text-xl font-bold text-center text-gray-900">Recuperación de Contraseña</h2>
        <p className="mt-3 text-sm text-center text-gray-600">
          Ingresa tu correo electrónico para recuperar tu contraseña.
        </p>

        {alert && (
          <div
            className={`mt-4 p-4 rounded ${alert.type === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
          >
            {alert.message}
          </div>
        )}

        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
              <div className="mt-1 mb-7">
                <div className="flex items-center px-5 py-3 bg-gray-100 rounded">
                  <FaRegEnvelope className="mr-2 text-gray-400" />
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Correo electrónico" 
                    autoComplete="email"
                    required
                    className={`flex-1 text-sm text-gray-600 bg-transparent outline-none ${errors.email ? 'border-red-500' : ''}`}
                  />
                </div>
                <ErrorMessage name="email" component="div" className="mt-1 text-xs text-red-500" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 mb-4 text-sm font-bold text-white transition-colors rounded bg-gradient-to-r from-customBlue to-customTurquoise"
              >
                {isSubmitting ? 'Enviando...' : 'Recuperando contraseña'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    </div>
  );
};

export default EnviarCorreoRecuperacion;
