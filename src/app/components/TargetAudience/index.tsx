import React from "react";

const TargetAudience = () => {
  return (
    <section className="xlg:h-screen">
      <div className="container flex flex-col justify-center items-center bg-white p-8 text-black">
        <div className="tracking-wide text-black font-bold p-4 text-2xl md:text-4xl xl:text-5xl">
          Para Quién Es Este Libro ?
        </div>
        <p className="opacity-70 text-[hsl(220,39%,35%)] text-base lg:text-xl xl:text-2xl">
          Este libro es ideal para programadores en JavaScript que desean
          mejorar sus habilidades en frontend y aprender a utilizar Tailwind
          creando interfaces atractivas y escalables. Perfecto para
          programadores web que buscan ampliar sus conocimientos en React y
          Sanity.io, y que desean aprender a manejar estas tecnologías de manera
          efectiva.
        </p>
        <p>En resumen, este libro es para:</p>
        <ul className="list-none mb-4">
          <li className="flex items-center mb-2">
            <img
              className="mb-1"
              src="/target-audience-img/user.svg"
              alt="image"
            />
            <div className="ml-2">
              <h5 className="font-bold mb-1 text-left">Producto 1</h5>
              <p className="text-sm text-gray-600">
                Descripción del producto 1
              </p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <img
              className="mb-1"
              src="/target-audience-img/user.svg"
              alt="image"
            />
            <div className="ml-2">
              <h5 className="font-bold mb-1 text-left">Producto 1</h5>
              <p className="text-sm text-gray-600">
                Descripción del producto 1
              </p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <img
              className="mb-1"
              src="/target-audience-img/user.svg"
              alt="image"
            />
            <div className="ml-2">
              <h5 className="font-bold mb-1 text-left">Producto 1</h5>
              <p className="text-sm text-gray-600">
                Descripción del producto 1
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TargetAudience;
