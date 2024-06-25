import React from "react";

const ProductFeatures = () => {
  return (
    <section className="container bg-white overflow-hidden text-center">
      <div className="mb-10 tracking-wide text-black font-bold text-2xl md:text-4xl xl:text-5xl">
        Que Incluye
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 text-black">
        <div className="md:flex md:justify-end">
          <img
            className="w-2/3 mx-auto md:mx-0"
            src="/product-feature-img/devices.png"
            alt="image"
          />
        </div>
        <div className="mx-auto md:mx-0">
          <ul className="list-none space-y-4 mb-4">
            <li className="flex items-center mb-2">
              <img
                className="mb-1"
                src="/target-audience-img/check.png"
                alt="image"
                width={24}
                height={24}
              />
              <div className="ml-2">
                <h5 className="text-base xl:text-2xl font-bold mb-1 text-left">
                  Código Fuente Incluido para Fácil Uso
                </h5>
              </div>
            </li>
            <li className="flex items-center mb-2">
              <img
                className="mb-1"
                src="/target-audience-img/check.png"
                alt="image"
                width={24}
                height={24}
              />
              <div className="ml-2">
                <h5 className="text-base xl:text-2xl font-bold mb-1 text-left">
                  Acceso al Proyecto entero en Github
                </h5>
              </div>
            </li>
            <li className="flex items-center mb-2">
              <img
                className="mb-1"
                src="/target-audience-img/check.png"
                alt="image"
                width={24}
                height={24}
              />
              <div className="ml-2">
                <h5 className="text-base xl:text-2xl font-bold mb-1 text-left">
                  Descripción de las Clases Tailwind
                </h5>
              </div>
            </li>
            <li className="flex items-center mb-2">
              <img
                className="mb-1"
                src="/target-audience-img/check.png"
                alt="image"
                width={24}
                height={24}
              />
              <div className="ml-2">
                <h5 className="text-base xl:text-2xl font-bold mb-1 text-left">
                  Instalación de Sanity CMS
                </h5>
              </div>
            </li>
            <li className="flex items-center mb-2">
              <img
                className="mb-1"
                src="/target-audience-img/check.png"
                alt="image"
                width={24}
                height={24}
              />
              <div className="ml-2">
                <h5 className="text-base xl:text-2xl font-bold mb-1 text-left">
                  Instalación de Next.js
                </h5>
              </div>
            </li>
            <li className="flex items-center mb-2">
              <img
                className="mb-1"
                src="/target-audience-img/check.png"
                alt="image"
                width={24}
                height={24}
              />
              <div className="ml-2">
                <h5 className="text-base xl:text-2xl font-bold mb-1 text-left">
                  Fragmentos de Código con gits
                </h5>
              </div>
            </li>
            <li className="flex items-center mb-2">
              <img
                className="mb-1"
                src="/target-audience-img/check.png"
                alt="image"
                width={24}
                height={24}
              />
              <div className="ml-2">
                <h5 className="text-base xl:text-2xl font-bold mb-1 text-left">
                  Utilización de Componentes de React
                </h5>
              </div>
            </li>
            <li className="flex items-center mb-2">
              <img
                className="mb-1"
                src="/target-audience-img/check.png"
                alt="image"
                width={24}
                height={24}
              />
              <div className="ml-2">
                <h5 className="text-base xl:text-2xl font-bold mb-1 text-left">
                  Integración de Sanity Studio con Next.js
                </h5>
              </div>
            </li>
            <li className="flex items-center mb-2">
              <img
                className="mb-1"
                src="/target-audience-img/check.png"
                alt="image"
                width={24}
                height={24}
              />
              <div className="ml-2">
                <h5 className="text-base xl:text-2xl font-bold mb-1 text-left">
                  Revalidación de Caché en Next.js
                </h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
