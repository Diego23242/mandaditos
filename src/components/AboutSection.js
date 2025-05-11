import React from 'react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
              alt="Equipo de Mandaditos Zepeda" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-green-600">¿Quiénes somos?</h2>
            <p className="text-gray-700 mb-4">
              En Mandaditos Zepeda nos dedicamos a hacer tu vida más fácil. Con más de 5 años de experiencia, hemos ayudado a cientos de personas a ahorrar tiempo y evitar estrés.
            </p>
            <p className="text-gray-700 mb-4">
              Nuestro equipo de mandaderos profesionales está capacitado para realizar cualquier tipo de mandado con eficiencia y discreción.
            </p>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <p className="text-green-700 font-medium">"La puntualidad y honestidad son nuestro sello" - Fundador</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;