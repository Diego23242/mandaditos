import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-red-50 text-gray-800 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tu tiempo vale, nosotros lo cuidamos</h1>
          <p className="text-lg mb-8 text-gray-600">Servicio de mandados rápidos, confiables y con la mejor actitud</p>
          <a 
            href="#contacto" 
            className="bg-gradient-to-r from-blue-600 to-red-600 text-white font-medium py-2 px-6 rounded-full hover:opacity-90 transition-all transform hover:scale-105 inline-block shadow-md"
          >
            Pide tu mandado
          </a>
        </div>
        <div className="md:w-1/2 animate-float">
          <img 
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Repartidor en moto" 
            className="rounded-lg shadow-lg w-full max-w-md mx-auto border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;