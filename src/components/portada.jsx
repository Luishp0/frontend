import React from 'react';
import Slider from 'react-slick';
import "../css/portada.css";
import foto1 from "../img/foto1.png";
import carrucel from "../img/carrucel.jpg";
import carrucel1 from "../img/carrucel1.jpg";
import carrucel2 from "../img/carrucel2.jpg";
import carrucel3 from "../img/carrucel3.jpg";
import cel3 from "../img/cel3.jpg";
import cel4 from "../img/cel4.jpg";
import logo from "../img/logo.jpg";

const Portada = () => {
  const settings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: <button className="boton-carrusel anterior">Anterior</button>,
    nextArrow: <button className="boton-carrusel siguiente">Siguiente</button>,
  };
  
  return (
    <div className="pagina-container">
      <div className="portada-container">
        <div className="center-content">
          <h2 className="titulo">AcuaCode</h2>
          <p className="texto">AcuaCode es un software que maneja en su totalidad la pecera y ver el estado de salud de los peces</p>
          <button className="boton leer-mas">Leer más</button>
        </div>
        <div className="circles-container">
          <div className="circle-wrapper">
            <div className="outer-circle">
              <div className="inner-circle">
                <img src={foto1} alt="Imagen" className="circle-image" />
              </div>
            </div>
          </div>
          <div className="second-circle-wrapper">
            <div className="outer-circle second-circle">
              <div className="inner-circle">
                {/* Aquí puedes agregar la imagen del segundo círculo si lo deseas */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="rectangulos-container">
          <div className="columna">
            <div className="rectangulo">
              <h3 className="titulo-rectangulo">Título 1</h3>
              <p className="texto-rectangulo">Texto 1</p>
            </div>
            <div className="rectangulo">
              <h3 className="titulo-rectangulo">Título 2</h3>
              <p className="texto-rectangulo">Texto 2</p>
            </div>
          </div>
          <div className="columna">
            <div className="rectangulo">
              <h3 className="titulo-rectangulo">Título 3</h3>
              <p className="texto-rectangulo">Texto 3</p>
            </div>
            <div className="rectangulo">
              <h3 className="titulo-rectangulo">Título 4</h3>
              <p className="texto-rectangulo">Texto 4</p>
            </div>
          </div>
        </div>
        <div className="carrusel-container">
          <Slider {...settings}>
            {carrucel && (
              <div className="imagen-izquierda">
                <img src={carrucel} alt="Imagen" className="imagen-abajo" />
              </div>
            )}
            {carrucel1 && (
              <div className="imagen-izquierda">
                <img src={carrucel1} alt="Imagen" className="imagen-abajo" />
              </div>
            )}
            {carrucel2 && (
              <div className="imagen-izquierda">
                <img src={carrucel2} alt="Imagen" className="imagen-abajo" />
              </div>
            )}
            {carrucel3 && (
              <div className="imagen-izquierda">
                <img src={carrucel3} alt="Imagen" className="imagen-abajo" />
              </div>
            )}
          </Slider>
          <div className="contenido-adicional">
            <h3>Título Adicional</h3>
            <p>Texto adicional explicativo.</p>
          </div>
        </div>
      </div>
      <div className="rectangulos-verticales">
        <div className="titulo-texto-container">
          <h3>Título Derecha</h3>
          <p>Texto explicativo a la derecha de los rectángulos verticales.</p>
        </div>
        <div className="rectangulo-vertical adelante">
          <img src={cel3} alt="Imagen" className="imagen-rectangulo" />
        </div>
        <div className="rectangulo-vertical atras">
          <img src={cel4} alt="Imagen" className="imagen-rectangulo" />
        </div>
      </div>
      <footer className="footer">
        <img src={logo} alt="Logo" className="logo logo-footer" />
        <div className="contacto">
          <h3>Contacto</h3>
          <p>Correo: ejemplo@acuacode.com</p>
          <p>Teléfono: 123-456-7890</p>
        </div>
        <div className="horas-servicio">
          <h3>Horas de Servicio</h3>
          <p>Lunes - Viernes: 9am - 6pm</p>
          <p>Sábado - Domingo: Cerrado</p>
        </div>
        <div className="lenguaje">
          <h3>Lenguaje</h3>
          <p>Español</p>
        </div>
        <div className="subscripciones">
          <h3>Subscripciones</h3>
          <p>¡Subscríbete para recibir nuestras últimas noticias!</p>
          <button>Subscribirse</button>
        </div>
        <div className="productos">
          <h3>Productos</h3>
          <ul>
            <li>Producto 1</li>
            <li>Producto 2</li>
            <li>Producto 3</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Portada;
