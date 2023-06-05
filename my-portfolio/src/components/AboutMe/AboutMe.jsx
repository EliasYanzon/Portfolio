import React from 'react';
import image from "../../Image/Perfil/DSC03925.JPG"

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-center">
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt="Imagen de perfil"
          className="mx-auto md:ml-0 md:mr-auto md:ml-auto h-auto w-60 md:h-screen md:w-auto rounded-full"
        />
      </div>
      
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-center px-4 mt-4 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Elias Yanzon</h2>
        <p className="text-lg md:text-xl text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec lorem vel est ultricies semper. Duis aliquet gravida ante, ac volutpat dui volutpat vel.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;