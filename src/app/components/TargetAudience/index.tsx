import React from "react";

const TargetAudience = () => {
  return (
    <section className="xlg:h-screen">
      <div className="container flex flex-col justify-center items-center bg-white p-8 text-black">
        <div className="tracking-wide text-black font-bold p-4 text-2xl md:text-4xl xl:text-5xl">
          Para Quién Es Este Libro ?
        </div>
        <p className="max-w-screen-md mb-12 opacity-70 text-[#15172c] font-semibold text-center text-base lg:text-xl xl:text-2xl">
          Este libro es ideal para programadores en JavaScript que desean
          mejorar sus habilidades en frontend y aprender a utilizar Tailwind
          creando interfaces atractivas y escalables. Para programadores web que
          buscan ampliar sus conocimientos en React.
          <span className="mt-2 block">En resumen, este libro es para:</span>
        </p>

        <ul className="list-none max-w-[600px] mb-4">
          <li className="flex items-center mb-4">
            <img
              className="mr-2"
              src="/target-audience-img/user.svg"
              alt="image"
            />
            <div className="ml-2">
              <h5 className="font-bold text-lg mb-1 text-left">
                Diseñadores de Interfaces de Usuario (UI/UX)
              </h5>
              <p className="text-base font-semibold text-gray-500">
                Los diseñadores de interfaces de usuario con experiencia en CSS
                pueden beneficiarse del libro al aprender a utilizar Tailwind
                CSS para crear estilos y diseños personalizados para sus
                aplicaciones web.
              </p>
            </div>
          </li>
          <li className="flex items-center mb-4">
            <img
              className="mr-2"
              src="/target-audience-img/user.svg"
              alt="image"
            />
            <div className="ml-2">
              <h5 className="font-bold text-lg mb-1 text-left">
                Desarrolladores Frontend
              </h5>
              <p className="text-base font-semibold text-gray-500">
                Aprenderán a construir aplicaciones dinámicas y de alto
                rendimiento con React y Next.js, aprovechando características
                como la renderización del lado del servidor
              </p>
            </div>
          </li>
          <li className="flex items-center mb-4">
            <img
              className="mr-2"
              src="/target-audience-img/user.svg"
              alt="image"
            />
            <div className="ml-2">
              <h5 className="font-bold text-lg mb-1 text-left">
                Desarrolladores Backend
              </h5>
              <p className="text-base font-semibold text-gray-500">
                Aprenderán cómo Next.js facilita la creación de rutas API y la
                gestión de la lógica del servidor, permitiendo una mayor
                integración entre el frontend y el backend.
              </p>
            </div>
          </li>
          <li className="flex items-center mb-4">
            <img
              className="mr-2"
              src="/target-audience-img/user.svg"
              alt="image"
            />
            <div className="ml-2">
              <h5 className="font-bold text-lg mb-1 text-left">
                Emprendedores
              </h5>
              <p className="text-base font-semibold text-gray-500">
                Les enseñará cómo crear aplicaciones web modernas y escalables
                utilizando Next.js, Tailwind CSS y TypeScript. Estas tecnologías
                permiten crear productos y servicios digitales innovadores que
                pueden llegar a una audiencia global.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TargetAudience;
