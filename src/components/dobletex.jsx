import React from "react";
import empresa from "../img/empresa.jpg";

const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto" style={{ marginTop: '-3cm' }}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
               
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-dark sm:text-4xl md:text-[40px]">
                Empresa
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Encargador de la pagina web, y puestos de la empresa
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Carlos Emmanuel"
            profession="Desarrollador web, Front end"
            imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
          />
          <TeamCard
            name="Diana Lucia"
            profession="Desarrollador web, Front end"
            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
          />
          <TeamCard
            name="Luis enrique"
            profession="Desarrollador web, Back end"
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
          
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/4">
      <div className="mx-auto mb-10 w-full max-w-[370px]">
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-[350px] object-cover" // Increased height for all images
          />
          <div className="absolute bottom-5 left-0 w-full text-center">
            <div className="relative mx-5 overflow-hidden rounded-lg bg-white dark:bg-grayDark px-3 py-5">
              <h3 className="text-base font-semibold text-dark dark:text-grayLight">
                {name}
              </h3>
              <p className="text-xs text-body-color dark:text-grayLight">
                {profession}
              </p>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
