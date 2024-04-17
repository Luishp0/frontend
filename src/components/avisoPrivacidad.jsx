import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; 
import Logo from '../img/logotra.png'; 
import Navbar from '../components/navbarRegresar';

const PrivacyPolicy = () => {
  return (
    <di>
        <Navbar linkTo={'/login'}/>
     <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-start p-8">
      <div className="max-w-4xl w-full mx-auto">
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold">Política de Privacidad</h1>
        </div>
        <p className="mb-6">
          Esta política de privacidad ("Política") describe cómo AcuaCode ("nosotros", "nos" o "nuestro") recopila, protege y utiliza la información de identificación personal ("Información personal") que usted ("Usuario", "usted" o "su") puede proporcionar a través del sitio web de AcuaCode (acuacode.com) o en el curso de la compra de cualquier producto de AcuaCode (colectivamente, "Sitio web"). La Política también describe las opciones disponibles para usted con respecto a nuestro uso de su Información personal y cómo puede acceder y actualizar esta información. Esta Política no se aplica a las prácticas de empresas que no son de nuestra propiedad ni controlamos, ni a personas que no empleamos ni administramos.
        </p>
        <p className="mb-6">
          Agradecemos su confianza en AcuaCode y le aseguramos que sus datos personales serán tratados con responsabilidad y de acuerdo con las regulaciones aplicables.
        </p>
        <h2 className="text-xl font-semibold mb-2">Responsable de la Protección de Datos Personales</h2>
        <p className="mb-6">
          AcuaCode asume la responsabilidad del tratamiento de sus datos personales y se compromete a protegerlos de acuerdo con los principios fundamentales de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
        </p>
        <h2 className="text-xl font-semibold mb-2">Datos Personales Recopilados</h2>
        <p className="mb-6">
          Los datos personales que podríamos recopilar incluyen, entre otros:
          <ul className="list-disc ml-8">
            <li>Nombre completo.</li>
            <li>Dirección de correo electrónico.</li>
            <li>Número de teléfono.</li>
            <li>Edad.</li>
            <li>Fecha de nacimiento.</li>
            <li>Sexo.</li>
            <li>Información sobre sus peces.</li>
          </ul>
        </p>
        <h2 className="text-xl font-semibold mb-2">Finalidades del Tratamiento</h2>
        <p className="mb-6">
          Los datos personales y otra información confidencial serán utilizados con las siguientes finalidades:
          <ol className="list-decimal ml-8">
            <li>Gestión de Proyectos.</li>
            <li>Comunicación Transaccional.</li>
            <li>Comunicación Personalizada.</li>
            <li>Análisis Estadístico.</li>
            <li>Optimización de Servicios.</li>
            <li>Cumplimiento Legal.</li>
          </ol>
        </p>
        <h2 className="text-xl font-semibold mb-2">Medidas de Seguridad</h2>
        <p className="mb-6">
          En AcuaCode, la seguridad y la protección de sus datos personales y otra información confidencial son de suma importancia para nosotros. Hemos implementado una serie de medidas de seguridad robustas, siguiendo las directrices de ISO 27001 e ISO 17799.
        </p>
        <h2 className="text-xl font-semibold mb-2">Consentimiento</h2>
        <p className="mb-6">
          Al proporcionar sus datos personales a AcuaCode, usted otorga su consentimiento para el tratamiento de sus datos con las finalidades mencionadas en este aviso de privacidad.
        </p>
        <h2 className="text-xl font-semibold mb-2">Derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO)</h2>
        <p className="mb-6">
          Respetamos y valoramos sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) sobre sus datos personales.
        </p>
        <h2 className="text-xl font-semibold mb-2">Cambios en el Aviso de Privacidad</h2>
        <p className="mb-6">
          Nos reservamos el derecho de modificar o actualizar este aviso de privacidad en cualquier momento para cumplir con cambios en la legislación o en nuestras prácticas de tratamiento de datos.
        </p>
        <h2 className="text-xl font-semibold mb-2">Contacto</h2>
        <p className="mb-2">
          Si tiene alguna pregunta o inquietud sobre este aviso de privacidad o el tratamiento de sus datos personales, por favor contáctenos a través de los siguientes medios:
        </p>
        <ul className="list-disc ml-8">
          <li className="flex items-center mb-2"><FiMail className="mr-2" />Correo Electrónico: AcuaCode@gmail.com</li>
          <li className="flex items-center mb-2"><FiPhone className="mr-2" />Número de Teléfono: +52 3318553885</li>
          <li className="flex items-center"><FiMapPin className="mr-2" />Dirección Postal: Carretera Santa Cruz-San Isidro Km. 4.5, 45640 Santa Cruz de las Flores, Jal.</li>
        </ul>
      </div>
     </div>
    </di>
  );
};

export default PrivacyPolicy;
