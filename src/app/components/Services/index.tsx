import React from "react";

const Services = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Nuestros servicios
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            className="mb-1"
            src="/services-img/javascript.svg"
            alt="image"
          />
          <h3 className="text-lg font-bold mb-2">Desarrollo web</h3>
          <p className="text-gray-600">
            Creamos sitios web personalizados y optimizados para dispositivos
            móviles.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <img className="mb-1" src="/services-img/react.svg" alt="image" />

          <h3 className="text-lg font-bold mb-2">
            Desarrollo de aplicaciones móviles
          </h3>
          <p className="text-gray-600">
            Desarrollamos aplicaciones iOS y Android que se ajustan a tus
            necesidades.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <i className="fas fa-paint-brush text-3xl text-orange-500 mb-4"></i>
          <h3 className="text-lg font-bold mb-2">Diseño gráfico</h3>
          <p className="text-gray-600">
            Creamos identidades visuales atractivas y profesionales para tu
            marca.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
