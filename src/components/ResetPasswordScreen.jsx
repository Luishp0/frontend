import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logotra from '../img/logotra.png'
import { MdLockOutline } from 'react-icons/md';

const NewPasswordForm = () => {


  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
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
            .matches(/^(?=.*[a-z])(?=.*[A-Z])/, "La contraseña debe contener al menos un carácter en mayúscula y minúscula")
            .matches(/\d/, "La contraseña debe contener al menos un número")
            .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "La contraseña debe contener al menos un carácter especial"),
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
                    autoComplete="current-password"
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
                    autoComplete="current-password"
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
                  Ingresar
                </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewPasswordForm;
