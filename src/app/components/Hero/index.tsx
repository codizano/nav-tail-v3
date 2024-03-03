import React from "react";

const Hero = () => {
  return (
    <div className="h-[650px] md:h-[500px] bg-gradient-to-r  from-black to-b3f06e pt-20">
      <section className="container flex flex-col items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-white">
          {/* Contenedor Para el Texto */}
          <div className="flex flex-col items-center text-center gap-4 md:items-start md:text-left">
            <h1 className="text-3xl">Construimos Apps para un mundo Mejor</h1>
            <p>
              Productos digitales como sitios web, aplicaciones y software
              ofrecen numerosas ventajas, como eficiencia mejorada,
              escalabilidad ilimitada, costos reducidos, acceso universal y
              rapidez de comercialización.
            </p>
            <div className="space-x-4">
              <button className="btn-primary">Empezar</button>
              <button className="btn-outline">Login</button>
            </div>
          </div>
          {/* Contenedor para la Imagen */}
          <div className="mx-auto p-8">
            <img
              src="/home-page-img/hero.svg"
              alt="hero image"
              className="md:max-w-125 lg:max-w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
