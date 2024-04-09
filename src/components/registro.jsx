import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/registro.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Registro = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setErrors }) => {
    try {
      const response = await fetch('http://localhost:8000/usuario', {  // Ruta correcta para el registro de usuario
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
        // Redirige al usuario a la página de éxito
        navigate('/');
      } else {
        // Muestra los errores del backend en el formulario
        setErrors(data.errors);
      }
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div className="body1">
      <div className="container">
        <h2>Registro</h2>
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
              .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "La contraseña debe contener al menos un carácter en mayúscula y minúscula")
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
              <label htmlFor="username">Nombre</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error-message" />

              <label htmlFor="fechaN">Fecha de Nacimiento</label>
              <Field type="date" id="fechaN" name="fechaN" />
              <ErrorMessage name="fechaN" component="div" className="error-message" />

              <label htmlFor="email">Correo Electrónico</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />

              <label htmlFor="password">Contraseña</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />

              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <Field type="password" id="confirmPassword" name="confirmPassword" />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />

              <label htmlFor="telefono">Teléfono</label>
              <Field type="text" id="telefono" name="telefono" maxLength="10" />
              <ErrorMessage name="telefono" component="div" className="error-message" />

              <button type="submit">Registrarse</button>
            </Form>
          )}
        </Formik>
        <Link to={"/"}>
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default Registro;
