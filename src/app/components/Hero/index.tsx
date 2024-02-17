import React from "react";

const Hero = () => {
  return (
    <div className="h-[650px] md:h-[500px] bg-gradient-to-r from-green-950 to-green-90 pt-20">
      <section className="container flex flex-col items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 dark:text-white">
          {/* hero text container */}
          <div>
            <h1>test</h1>
          </div>
          {/* hero Image container */}
          {/*  <div className="mx-auto max-w-xs p-4"> */}
          <img
            src="/home-page-img/landing.svg"
            alt="home image"
            className="mx-full"
          />
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
