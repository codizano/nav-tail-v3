import React from "react";

const Hero = () => {
  return (
    <section className="xlg:h-screen">
      <div className="container bg-white overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 text-black">
          <div className="p-8">
            <div className="uppercase tracking-wide text-indigo-500 font-bold text-2xl md:text-6xl xl:text-7xl">
              Company retreats
            </div>
            <p className="opacity-70 text-[hsl(220,39%,35%)] text-base lg:text-xl xl:text-2xl">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that. Looking to take your team away on a retreat to enjoy awesome
              food and take in some sunshine?
            </p>
            <div className="pt-2 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <button className="sm:w-full bg-blue-500 hover:bg-blue-700 md:text-base lg:text-xl  text-white font-bold py-2 px-4 rounded">
                Empezar
              </button>
              <button className="sm:w-full bg-blue-500 hover:bg-blue-700  md:text-base lg:text-xl  text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="object-cover w-3/4 "
              src="/home-page-img/devbook-cover.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
