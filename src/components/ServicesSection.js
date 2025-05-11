import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Compras de supermercado",
      description: "Hacemos tus compras mientras tú te relajas",
      icon: "🛒"
    },
    {
      title: "Pago de servicios",
      description: "Paga tus recibos sin hacer filas",
      icon: "💸"
    },
    {
      title: "Entrega de paquetería",
      description: "Recogemos y entregamos tus paquetes",
      icon: "📦"
    },
    {
      title: "Trámites bancarios",
      description: "Depósitos, retiros y otros trámites",
      icon: "🏦"
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
          <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            Nuestros Servicios
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-200"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;