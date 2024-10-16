import React from "react";

const Card = () => {
  return (
    <div className="flex items-center justify-center" style={{ marginTop: '3cm' }}>
      <section className="bg-grayLight pt-20 dark:bg-grayDark lg:pt-[120px]">
        <div className="container mx-auto px-4">
          {/* Ajustar el grid para pantallas pequeñas */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start">
            <SingleCard
              image={require("../img/peceramader.jpg")}
              CardTitle="Diseño y mantenimiento de paisajismo acuático"
              titleHref="/#"
              btnHref="/#"
              CardDescription="Transforma tu pecera en una obra de arte con nuestro servicio de diseño y mantenimiento de paisajismo acuático."
            />
            <SingleCard
              image={require("../img/peceramadera.png")}
              CardTitle="Integración de sistemas de automatización del hogar"
              CardDescription="Conecta tu pecera inteligente con otros dispositivos de automatización del hogar para una experiencia aún más conveniente y personalizada."
            />
            <SingleCard
              image={require("../img/peceramaderr.jpg")}
              CardTitle="Consultoría en sostenibilidad acuática"
              CardDescription="Nuestro equipo de expertos en sostenibilidad acuática te proporcionará asesoramiento sobre cómo hacer tu pecera inteligente más ecológica y respetuosa con el medio ambiente."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-lg duration-300 hover:shadow-xl dark:bg-grayDark dark:shadow-none flex flex-col h-full">
      {/* Ajustar la imagen para que se mantenga en el mismo nivel */}
      <div className="h-64">
        <img
          src={image}
          alt={CardTitle}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-8 flex-1 flex flex-col justify-between text-center">
        <div>
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-grayLight"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-grayLight text-justify">
            {CardDescription}
          </p>
        </div>
        {Button && (
          <a
            href={btnHref ? btnHref : "#"}
            className="inline-block rounded-full border border-gray-300 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-grayLight dark:text-grayLight"
          >
            {Button}
          </a>
        )}
      </div>
    </div>
  );
};
