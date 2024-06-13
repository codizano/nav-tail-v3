import React from "react";
import {
  PiShoppingBag,
  PiShoppingCart,
  PiShoppingCartBold,
} from "react-icons/pi";

const Hero = () => {
  return (
    <section className="xlg:h-screen">
      <div className="container bg-white overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 text-black">
          <div className="p-8">
            <div className="mb-4 tracking-wide text-black font-bold text-2xl md:text-4xl xl:text-5xl">
              Crea tu Aplicación Web con Next.js y Sanity.io
            </div>
            <p className="opacity-70 text-[hsl(220,39%,35%)] text-base lg:text-xl xl:text-2xl">
              Crea tu propia página web profesional con Next.js y Sanity.io
              siguiendo este completo tutorial paso a paso. Aprenderás React,
              Tailwind CSS, y TypeScript. ¡Empieza hoy mismo y domina estas
              tecnologías avanzadas!
            </p>
            <div className="pt-4 flex flex-col md:flex-row justify-content-start space-y-4 md:space-y-0 md:space-x-4 ">
              <button className="flex items-center justify-center gap-2 sm:w-full lg:max-w-36 bg-orange-500  md:text-base lg:text-xl  text-white font-bold py-2 px-4 rounded-full">
                <PiShoppingCartBold fontSize={20} /> 2 $
              </button>
              {/*  <button className="sm:w-full lg:max-w-40 bg-white  border-2 border-orange-500 md:text-base lg:text-xl  text-orange-500 font-bold py-2 px-2 rounded-full">
                Login
              </button> */}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="object-cover w-3/4 shadow-2xl"
              src="/home-page-img/cover1.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
