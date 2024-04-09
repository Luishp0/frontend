import React, { useState } from "react";
import {FaGoogle, FaRegEnvelope, FaApple } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'
import logotra from '../img/logotra.png'
import backgroundImage from '../img/backgroundImage.jpeg'
import { Link, useNavigate } from 'react-router-dom'
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
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl mx-auto overflow-hidden bg-white shadow-xl rounded-3xl md:flex">
        <div className="px-8 py-12 md:w-1/2 md:px-16">
          <div className="flex justify-center mb-8">
            <img src={logotra} alt="Logo" className="w-32 h-32" /> 
          </div>
          
          <h2 className="mb-4 text-3xl font-bold text-center text-customBlue ">Inicio de Sesión</h2>

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
                  <div className="flex items-center px-6 py-3 bg-gray-100 rounded-lg">
                    <FaRegEnvelope className="mr-2 text-gray-400" />
                    <Field type="email" name="email" placeholder="Correo electrónico" className="flex-1 text-gray-600 bg-transparent outline-none" />
                  </div>
                  <ErrorMessage name="email" component="div" className="text-red-500 error-message" />
                </div>

                <div className="mb-6">
                  <div className="flex items-center px-6 py-3 bg-gray-100 rounded-lg">
                    <MdLockOutline className="mr-2 text-gray-400" />
                    <Field type="password" name="password" placeholder="Contraseña" className="flex-1 text-gray-600 bg-transparent outline-none" />
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 error-message" />
                </div>

                {error && <div className="error-message">{error}</div>}

                <div className='flex items-center justify-between w-full mb-5 sm:w-80'>
                  <label className='flex items-center space-x-2 text-xs'>
                    <input type='checkbox' name='remember' className='bg-gray-100 form-checkbox ' />
                    <span className='text-base text-customBlue '>Recordar</span>
                  </label>
                  <a className='text-base text-customBlue hover:underline '>¿Olvidaste la contraseña?</a>
                </div>

                <button type="submit" className="w-full py-3 mb-4 font-bold text-white transition-colors rounded-lg bg-gradient-to-r from-customBlue to-customTurquoise">
                  Ingresar
                </button>

                <p className="text-base text-center text-gray-600 ">
                  ¿Aún no tienes cuenta?{' '}
                  <Link to="/registro">
                    <a className="text-base text-customBlue hover:underline">
                      Registrarse
                    </a>
                  </Link>
                </p>

                <div className="flex justify-center mt-5 mb-5 ">
                  <div className='inline-block w-40 h-1 mb-7 bg-slate-300 '></div>
                  <p className="mb-2 text-gray-600">O</p>
                  <div className='inline-block w-40 h-1 bg-slate-300 mb-7'></div>
                </div>
          
                <div className="flex justify-center mb-3 ">
                  <a className="flex items-center justify-center w-12 h-12 mr-4 transition-colors duration-300 bg-gray-100 rounded-lg hover:bg-gray-200">
                    <FaApple className="text-3xl text-gray-600 hover:text-customBlue" />
                  </a>
                  <a className="flex items-center justify-center w-12 h-12 ml-4 transition-colors duration-300 bg-gray-100 rounded-lg hover:bg-gray-200">
                    <FaGoogle className="text-3xl text-gray-600 hover:text-customBlue" />
                  </a>
                </div>

                <div className="mt-5 text-sm text-center">
                  <a  className="text-gray-500 hover:text-gray-600">
                    Política de privacidad
                  </a>
                  <span className="mx-2">|</span>
                  <a  className="text-gray-500 hover:text-gray-600">
                    Términos de uso
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="hidden bg-center bg-cover md:block md:w-1/2 rounded-r-3xl filter brightness-75" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="px-12 py-16 bg-opacity-80">
            <h2 className="mb-4 text-3xl font-bold text-white">¡Bienvenido!</h2>
            <p className="mb-8 text-white">Completa tus datos personales y comienza tu aventura con nosotros.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login