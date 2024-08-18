import React, { useState, useContext, useEffect } from "react";
import { FaRegEnvelope, FaApple } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import logotra from '../img/logotra.png';
import backgroundImage from '../img/backgroundImage.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from "react-icons/fc";
import Navbar from "./navbar";
import { AuthContext } from './AuthContext'; 
import Swal from 'sweetalert2';
import { auth, provider } from '../firebaseConfig'; // Importa Firebase y Google provider
import { signInWithPopup } from "firebase/auth"; // Importa función para autenticación

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

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
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', values.email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }

        login(data.result.token, data.result.nombre, data.result.telefono, data.result.correo);
        console.log(login);
        
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

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Usuario autenticado:', user);
        // Aquí puedes manejar el inicio de sesión con Google
        login(user.accessToken, user.displayName); // Aquí puedes ajustar esto según tu lógica de autenticación
        navigate('/inicio');
      })
      .catch((error) => {
        console.error('Error durante la autenticación con Google:', error);
        Swal.fire({
          title: 'Error',
          text: 'Error durante la autenticación con Google',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 dark:bg-gray-900">
        <div className="w-full max-w-4xl mx-auto overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-xl md:flex">
          <div className="px-6 py-5 md:py-10 md:w-1/2 md:px-14">
            <div className="flex justify-center mb-5">
              <img src={logotra} alt="Logo" className="w-24 h-24" />
            </div>

            <h2 className="mb-5 text-xl font-bold text-center text-customBlue dark:text-customBlue-light">Inicio de Sesión</h2>

            <Formik
              enableReinitialize={true} // Esto asegura que los valores iniciales se actualicen cuando cambia el estado
              initialValues={{
                email: email,
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
                    <div className="flex items-center px-5 py-3 bg-gray-100 dark:bg-gray-700 rounded">
                      <FaRegEnvelope className="mr-2 text-gray-400 dark:text-gray-300" />
                      <Field
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={email} // Asegúrate de que el valor del campo sea el estado de `email`
                        onChange={(e) => setEmail(e.target.value)} // Actualiza el estado de `email` cuando el usuario escribe
                        className="flex-1 text-sm text-gray-600 dark:text-gray-300 bg-transparent outline-none"
                      />
                    </div>
                    <ErrorMessage name="email" component="div" className="mt-1 text-xs text-red-500 error-message" />
                  </div>

                  <div className="mb-5">
                    <div className="flex items-center px-5 py-3 bg-gray-100 dark:bg-gray-700 rounded">
                      <MdLockOutline className="mr-2 text-gray-400 dark:text-gray-300" />
                      <Field
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        className="flex-1 text-sm text-gray-600 dark:text-gray-300 bg-transparent outline-none"
                      />
                    </div>
                    <ErrorMessage name="password" component="div" className="mt-1 text-xs text-red-500 error-message" />
                  </div>

                  {error && <div className="text-sm error-message text-red-500">{error}</div>}

                  <div className='flex items-center justify-between w-full mb-4 sm:w-full md:w-80'>
                    <label className='flex items-center space-x-2 text-xs sm:text-sm md:w-2/3 lg:w-full'>
                      <input
                        type='checkbox'
                        name='remember'
                        className='bg-gray-100 dark:bg-gray-700 form-checkbox'
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                      />
                      <span className='text-nowrap sm:text-sm text-customBlue dark:text-customBlue-light'>Recordar</span>
                    </label>
                    <Link to="/recuperacion" className='text-xs text-nowrap sm:text-sm text-customBlue dark:text-customBlue-light hover:underline'>¿Olvidaste la contraseña?</Link>
                  </div>

                  <button type="submit" className="w-full py-3 mb-4 text-sm font-bold text-white transition-colors rounded bg-gradient-to-r from-customBlue to-customTurquoise">
                    Ingresar
                  </button>

                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    ¿Aún no tienes cuenta?{' '}
                    <Link to="/registro" className="text-sm text-customBlue dark:text-customBlue-light hover:underline">
                      Registrarse
                    </Link>
                  </p>

                  <div className="flex justify-center mt-4 mb-4">
                    <div className='inline-block w-32 h-1 mb-6 bg-slate-300 dark:bg-slate-600'></div>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">O</p>
                    <div className='inline-block w-32 h-1 mb-6 bg-slate-300 dark:bg-slate-600'></div>
                  </div>

                  <div className="flex justify-center mb-3">
                    <button className="flex items-center justify-center w-40 h-10 mr-2 transition-colors duration-300 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                      <FaApple className="text-2xl text-black dark:text-white" />
                    </button>

                    <button onClick={handleGoogleLogin} className="flex items-center justify-center w-40 h-10 ml-4 transition-colors duration-300 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600">
                      <FcGoogle className="text-2xl text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>

                  <div className="mt-4 text-sm text-center">
                    <Link to="/avisoPrivacidad" className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      Política de privacidad
                    </Link>
                    <span className="mx-2">|</span>
                    <Link to="/terms" className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      Términos y condiciones
                    </Link>
                  </div>

                </Form>
              )}
            </Formik>
          </div>

          <div className="relative hidden md:block md:w-1/2">
            <img
              src={backgroundImage}
              alt="Imagen de fondo"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
