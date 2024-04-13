import React from "react";

const Card = () => {
  return (
    <div className="flex items-center justify-center" style={{ marginTop: '3cm' }}>
      <section className="bg-gray-2 pt-20 dark:bg-dark lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-dark sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
