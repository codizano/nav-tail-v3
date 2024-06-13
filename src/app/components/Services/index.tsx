import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSanity,
  SiTailwindcss,
  SiTypeform,
  SiTypescript,
} from "react-icons/si";

const Services = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Que obtendrás de este Libro?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div className="bg-white rounded-lg shadow-md p-6">
          <SiJavascript fontSize={55} color="#f97316" className="mb-1" />
          <h3 className="text-lg font-bold mb-2">Desarrollo web</h3>
          <p className="text-gray-600">
            Creamos sitios web personalizados y optimizados para dispositivos
            móviles.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <SiReact fontSize={55} color="#f97316" className="mb-1" />

          <h3 className="text-lg font-bold mb-2">
            Desarrollo de aplicaciones móviles
          </h3>
          <p className="text-gray-600">
            Desarrollamos aplicaciones iOS y Android que se ajustan a tus
            necesidades.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <SiTypescript fontSize={55} color="#f97316" className="mb-1" />
          <h3 className="text-lg font-bold mb-2">Diseño gráfico</h3>
          <p className="text-gray-600">
            Creamos identidades visuales atractivas y profesionales para tu
            marca.
          </p>
        </div>
        {/* Sanity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <SiSanity fontSize={55} color="#f97316" className="mb-1" />
          <h3 className="text-lg font-bold mb-2">Diseño gráfico</h3>
          <p className="text-gray-600">
            Creamos identidades visuales atractivas y profesionales para tu
            marca.
          </p>
        </div>
        {/* Tailwind Css */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <SiTailwindcss fontSize={55} color="#f97316" className="mb-1" />
          <h3 className="text-lg font-bold mb-2">Diseño gráfico</h3>
          <p className="text-gray-600">
            Creamos identidades visuales atractivas y profesionales para tu
            marca.
          </p>
        </div>
        {/* Next.Js */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <SiNextdotjs fontSize={55} color="#f97316" className="mb-1" />
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
