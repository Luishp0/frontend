import React from "react";
import { FaRegEnvelope, FaUser, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import logotra from '../img/logotra.png';
import backgroundImage from '../img/backgroundImage.jpeg';
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';  // Importa SweetAlert2
import Navbar from "./navbar";

const Registro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setErrors }) => {
    try {
      const response = await fetch('http://localhost:8000/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          roles_idroles: 1,
          nombre: values.username,
          fechaNacimiento: values.fechaN,
          correo: values.email,
          contrasena: values.password,
          telefono: values.telefono,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Muestra SweetAlert2 con mensaje de éxito
        Swal.fire({
          title: '¡Registrado!',
          text: 'Tu cuenta ha sido creada exitosamente. Redirigiendo a la página de inicio de sesión...',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        }).then(() => {
          navigate('/login');
        });
      } else {
        // Muestra errores del backend en el formulario
        setErrors(data.errors);
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al registrar tu cuenta. Inténtalo de nuevo.',
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
          <div className="px-2 py-2 md:py-8 md:w-1/2 md:px-10">
            <div className="flex justify-center mb-2">
              <img src={logotra} alt="Logo" className="w-20 h-20" />
            </div>

            <h2 className="mb-2 text-xl font-bold text-center text-customBlue">Registro de Cuenta</h2>

            <Formik
              initialValues={{
                username: '',
                fechaN: '',
                email: '',
                password: '',
                confirmPassword: '',
                telefono: '',
              }}
              validationSchema={Yup.object({
                username: Yup.string()
                  .matches(/^[A-Za-z\s]+$/, 'Ingrese solo letras')
                  .required('*Campo requerido'),
                fechaN: Yup.date()
                  .required('*Campo requerido'),
                email: Yup.string()
                  .email('Correo no valido')
                  .required('*Campo requerido'),
                password: Yup.string()
                  .required('*Campo requerido')
                  .min(8, 'La contraseña debe tener al menos 8 caracteres')
                  .matches(/^(?=.*[a-z])(?=.*[A-Z])/, "La contraseña debe contener al menos un carácter en mayúscula y minúscula")
                  .matches(/\d/, "La contraseña debe contener al menos un número")
                  .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "La contraseña debe contener al menos un carácter especial"),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
                  .required('*Campo requerido'),
                telefono: Yup.string()
                  .matches(/^\d+$/, 'Ingrese solo números')
                  .max(10, 'Máximo 10 caracteres')
                  .required('*Campo requerido'),
              })}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-2">
                    <div className="flex items-center px-5 py-3 bg-gray-100 rounded">
                      <FaUser className="mr-2 text-gray-400" />
                      <Field type="text" id="username" name="username" placeholder="Nombre" className="flex-1 text-sm text-gray-600 bg-transparent outline-none" />
                    </div>
                    <ErrorMessage name="username" component="div" className="mt-1 text-xs text-red-500 error-message" />
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center px-5 py-3 bg-gray-100 rounded">
                      <FaPhone className="mr-2 text-gray-400" />
                      <Field type="tel" id="telefono" name="telefono" placeholder="Teléfono" maxLength={10} className="flex-1 text-sm text-gray-600 bg-transparent outline-none" />
                    </div>
                    <ErrorMessage name="telefono" component="div" className="mt-1 text-xs text-red-500 error-message" />
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center px-5 py-3 bg-gray-100 rounded">
                      <FaCalendarAlt className="mr-2 text-gray-400" />
                      <Field type="date" id="fechaN" name="fechaN" placeholder="Fecha de Nacimiento" className="flex-1 text-sm text-gray-600 bg-transparent outline-none" />
                    </div>
                    <ErrorMessage name="fechaN" component="div" className="mt-1 text-xs text-red-500 error-message" />
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center px-5 py-3 bg-gray-100 rounded">
                      <FaRegEnvelope className="mr-2 text-gray-400" />
                      <Field type="email" id="email" name="email" placeholder="Correo Electrónico" className="flex-1 text-sm text-gray-600 bg-transparent outline-none" />
                    </div>
                    <ErrorMessage name="email" component="div" className="mt-1 text-xs text-red-500 error-message" />
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center px-5 py-3 bg-gray-100 rounded">
                      <MdLockOutline className="mr-2 text-gray-400" />
                      <Field type="password" name="password" id="password" placeholder="Contraseña" className="flex-1 text-sm text-gray-600 bg-transparent outline-none" />
                    </div>
                    <ErrorMessage name="password" component="div" className="mt-1 text-xs text-red-500 error-message" />
                  </div>

                  <div className="mb-2">
                    <div className="flex items-center px-5 py-3 bg-gray-100 rounded">
                      <MdLockOutline className="mr-2 text-gray-400" />
                      <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirmar Contraseña" className="flex-1 text-sm text-gray-600 bg-transparent outline-none" />
                    </div>
                    <ErrorMessage name="confirmPassword" component="div" className="mt-1 text-xs text-red-500 error-message" />
                  </div>

                  <div className='flex items-center justify-between w-full mb-3 sm:w-full md:w-80'>
                    <label className='flex items-center space-x-2 text-xs sm:text-sm md:w-2/3 lg:w-full'>
                      <input type='checkbox' name='remember' className='bg-gray-100 form-checkbox ' />
                      <span style={{ fontSize: '0.75rem' }} className='text-xs sm:text-sm text-customBlue text-nowrap'>Acepto los Términos de Servicio y la Política de Privacidad</span>
                    </label>
                  </div>

                  <button type="submit" className="w-full py-3 mb-3 text-sm font-bold text-white transition-colors rounded bg-gradient-to-r from-customBlue to-customTurquoise">
                    Registrarse
                  </button>

                  <p className="text-sm text-center text-gray-600">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login" className="text-sm text-customBlue hover:underline">
                      Iniciar Sesión
                    </Link>
                  </p>

                  <div className="mt-3 text-sm text-center">
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
              <h2 className="mb-4 text-2xl font-bold text-white">¡Bienvenido!</h2>
              <p className="mb-6 text-white">Completa tus datos personales y comienza tu aventura con nosotros.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
