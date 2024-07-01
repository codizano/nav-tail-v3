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
          <h3 className="text-lg font-bold mb-2">JavaScript</h3>
          <p className="text-gray-600">
            Lenguaje de programación esencial para el desarrollo web interactivo
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <SiReact fontSize={55} color="#f97316" className="mb-1" />

          <h3 className="text-lg font-bold mb-2">React</h3>
          <p className="text-gray-600">
            Desarrollo de interfaces de usuario dinámicas y componentes
            reutilizables
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <SiTypescript fontSize={55} color="#f97316" className="mb-1" />
          <h3 className="text-lg font-bold mb-2">TypeScript</h3>
          <p className="text-gray-600">
            Superset de JavaScript que añade tipos estáticos para un desarrollo
            más robusto
          </p>
        </div>
        {/* Sanity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <SiSanity fontSize={55} color="#f97316" className="mb-1" />
          <h3 className="text-lg font-bold mb-2">Sanity CMS</h3>
          <p className="text-gray-600">
            CMS flexible y potente para gestionar contenido de manera eficiente
          </p>
        </div>
        {/* Tailwind Css */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <SiTailwindcss fontSize={55} color="#f97316" className="mb-1" />
          <h3 className="text-lg font-bold mb-2">Tailwind Css</h3>
          <p className="text-gray-600">
            CSS utilitario que facilita la creación de diseños personalizados y
            escalables
          </p>
        </div>
        {/* Next.Js */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <SiNextdotjs fontSize={55} color="#f97316" className="mb-1" />
          <h3 className="text-lg font-bold mb-2">Next.js</h3>
          <p className="text-gray-600">
            Framework de React para aplicaciones web rápidas y optimizadas para
            SEO
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
