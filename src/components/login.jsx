import React from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  return (
    <div className="body1">
      <div className="container">
        <h2>Iniciar sesion</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('Ingresa un correo valido').required('*Campos obligatorios'),
            password: Yup.string()
            .required('*Campos obligatorios')
            .min(8, 'minimo 8 caracteres'),
          })}
          onSubmit={(values, { setErrors }) => {
            if (values.email !== 'luis@g.com' || values.password !== '12345678') {
              setErrors({ email: 'Invalid email or password', password: 'Invalid email or password' });
            } else {
              console.log('Login successful');
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <label htmlFor="email">Correo Electronico</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />

              <label htmlFor="password">Contrasena</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />

              <div className="button-container">
                <Link to={"/inicio"} >
                  <button type="submit" className="login-button">
                    Iniciar sesión
                  </button>
                </Link>
          luis es gay  
            diana se la come
                <Link to="/registro" className="register-buttom">
                  <button >
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
