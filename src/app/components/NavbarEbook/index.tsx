"use client";
import React, { useState } from "react";
import Image from "next/image";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="relative z-[99]  text-black">
        <nav className="container flex items-center justify-between h-[70px] py-2">
          {/* Sección Logo */}
          <div className="flex gap-2 text-2xl font-bold md:text-3xl text-black">
            <Image src="/icons/book.svg" alt="sun" width={30} height={30} />
            <a href="#">
              CODI
              <span className="inline-block font-bold text-primary">ZANO</span>
            </a>
          </div>
          {/* 1. Sección Móvil */}
          <div className="flex items-center gap-4 md:hidden ">
            <Image
              src="/icons/bars.svg"
              alt="bars"
              width={30}
              height={30}
              onClick={toggleMenu}
            />
          </div>
        </nav>
      </header>
      {/* 2. Invocación de Menú Responsive */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
