import React, { useState, useContext } from "react";
import { FaRegEnvelope, FaApple } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import logotra from '../img/logotra.png';
import backgroundImage from '../img/backgroundImage.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from "react-icons/fc";
import Navbar from "./navbar";
import { AuthContext } from './AuthContext'; // Ajusta la ruta si es necesario
import Swal from 'sweetalert2';

const Login = () => {
  const { login } = useContext(AuthContext); // Asegúrate de que AuthContext está correctamente importado
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
        login(data.result.token, data.result.nombre); // Llama a login desde el AuthContext
        Swal.fire({
          title: '¡Bienvenido!',
          text: 'Inicio de sesión exitoso. Redirigiendo...',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          if (data.result.roles_idroles === 1) {
            navigate('/inicioadministrador');
          } else if (data.result.roles_idroles === 2) {
            navigate('/inicio');
          }
        });
      } else {
        setError(data.message);
        Swal.fire({
          title: 'Error',
          text: data.message || 'Error al iniciar sesión',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      Swal.fire({
        title: 'Error',
        text: 'Error al iniciar sesión. Inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
        <div className="w-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl md:flex">
          <div className="px-6 py-5 md:py-10 md:w-1/2 md:px-14">
            <div className="flex justify-center mb-5">
              <img src={logotra} alt="Logo" className="w-24 h-24" />
            </div>

            <h2 className="mb-5 text-xl font-bold text-center text-customBlue">Inicio de Sesión</h2>

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
                  <div className="mb-4">
                    <div className="flex items-center px-5 py-3 bg-gray-100 rounded">
                      <FaRegEnvelope className="mr-2 text-gray-400" />
                      <Field type="email" name="email" placeholder="Correo electrónico" className="flex-1 text-sm text-gray-600 bg-transparent outline-none" />
                    </div>
                    <ErrorMessage name="email" component="div" className="mt-1 text-xs text-red-500 error-message" />
                  </div>

                  <div className="mb-5">
                    <div className="flex items-center px-5 py-3 bg-gray-100 rounded">
                      <MdLockOutline className="mr-2 text-gray-400" />
                      <Field type="password" name="password" placeholder="Contraseña" className="flex-1 text-sm text-gray-600 bg-transparent outline-none" />
                    </div>
                    <ErrorMessage name="password" component="div" className="mt-1 text-xs text-red-500 error-message" />
                  </div>

                  {error && <div className="text-sm error-message">{error}</div>}

                  <div className='flex items-center justify-between w-full mb-4 sm:w-full md:w-80'>
                    <label className='flex items-center space-x-2 text-xs sm:text-sm md:w-2/3 lg:w-full'>
                      <input type='checkbox' name='remember' className='bg-gray-100 form-checkbox ' />
                      <span className='text-nowrap sm:text-sm text-customBlue'>Recordar</span>
                    </label>
                    <Link to="/recuperacion" className='text-xs text-nowrap sm:text-sm text-customBlue hover:underline'>¿Olvidaste la contraseña?</Link>
                  </div>

                  <button type="submit" className="w-full py-3 mb-4 text-sm font-bold text-white transition-colors rounded bg-gradient-to-r from-customBlue to-customTurquoise">
                    Ingresar
                  </button>

                  <p className="text-sm text-center text-gray-600">
                    ¿Aún no tienes cuenta?{' '}
                    <Link to="/registro" className="text-sm text-customBlue hover:underline">
                      Registrarse
                    </Link>
                  </p>

                  <div className="flex justify-center mt-4 mb-4">
                    <div className='inline-block w-32 h-1 mb-6 bg-slate-300'></div>
                    <p className="mb-2 text-sm text-gray-600">O</p>
                    <div className='inline-block w-32 h-1 mb-6 bg-slate-300'></div>
                  </div>

                  <div className="flex justify-center mb-3">
                    <button className="flex items-center justify-center w-40 h-10 mr-2 transition-colors duration-300 bg-gray-100 rounded hover:bg-gray-200">
                      <FaApple className="text-2xl text-black" />
                    </button>
                    <button className="flex items-center justify-center w-40 h-10 ml-4 transition-colors duration-300 bg-gray-100 rounded hover:bg-gray-200">
                      <FcGoogle className="text-2xl text-gray-600" />
                    </button>
                  </div>

                  <div className="mt-4 text-sm text-center">
                    <Link to="/avisoPrivacidad" className="text-gray-500 hover:text-gray-600">
                      Política de privacidad
                    </Link>
                    <span className="mx-2">|</span>
                    <Link to="/terms" className="text-gray-500 hover:text-gray-600">
                      Términos de uso
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="hidden md:block md:w-1/2 rounded-r-md filter brightness-75" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="px-10 py-12 bg-opacity-80">
              <h2 className="mb-4 text-2xl font-bold text-white">¡Hola de nuevo!</h2>
              <p className="mb-6 text-white">Ingresa tus datos para seguir adelante.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
