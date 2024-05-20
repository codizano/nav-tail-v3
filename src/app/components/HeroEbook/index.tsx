import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-screen">
        <section className="container items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 text-black ">
            {/* Contenedor Para el Texto */}
            <div className="flex flex-col  text-center gap-4 md:items-start md:text-left">
              <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Construimos Apps para un mundo Mejor
              </h1>
              <p className="opacity-70 text-[hsl(220,39%,35%)] text-sm md:text-base lg:text-xl xl:text-2xl">
                Desarrollamos aplicaciones web y móviles para empresas y
                organizaciones. Productos digitales como sitios web,
                aplicaciones y software ofrecen numerosas ventajas, como
                eficiencia mejorada, escalabilidad ilimitada, costos reducidos,
                acceso universal y rapidez de comercialización.
              </p>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <button className="sm:w-full bg-blue-500 hover:bg-blue-700 md:text-base lg:text-xl  text-white font-bold py-2 px-4 rounded">
                  Empezar
                </button>
                <button className="sm:w-full bg-blue-500 hover:bg-blue-700  md:text-base lg:text-xl  text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
              </div>
            </div>
            {/* Contenedor para la Imagen */}
            <div className="flex items-center justify-center">
              <div className="w-3/4">
                <img
                  src="/home-page-img/devbook-cover.png"
                  alt="hero image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
