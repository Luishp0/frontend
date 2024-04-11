import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 flex flex-wrap justify-between border-t-2 border-gray-300 mt-20">
      <div className="contacto flex-1 mr-4">
        <h3 className="mb-4 text-xl">Contacto</h3>
        <p>Correo: AcuaCode@gmail.com</p>
        <p>Teléfono: 531-382-4982</p>
      </div>
      <div className="horas-servicio flex-1 mr-4">
        <h3 className="mb-4 text-xl">Horas de Servicio</h3>
        <p>Lunes - Viernes: 9am - 8pm</p>
        <p>Sábado - Domingo: 9am - 2pm</p>
      </div>
      <div className="lenguaje flex-1 mr-4">
        <h3 className="mb-4 text-xl">Lenguaje</h3>
        <p>Español</p>
        <p>Inglés</p>
      </div>
      <div className="subscripciones flex-1 mr-4">
        <h3 className="mb-4 text-xl">Subscripciones</h3>
        <p>¡Subscríbete para recibir nuestras últimas noticias!</p>
        <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Subscribirse</button>
      </div>
      <div className="productos flex-1">
        <h3 className="mb-4 text-xl">Productos</h3>
        <ul>
          <li>AcuaCode pecera inteligente </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
