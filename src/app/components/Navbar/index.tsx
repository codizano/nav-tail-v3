"use client"; // 1. USE CLIENT
import React, { useState } from "react"; // 2. Importar useState
import Image from "next/image";
import ResponsiveMenu from "./ResponsiveMenu";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // 3. useState
  //4. función toggleMenu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header className="relative z-[99] bg-navbar text-white">
        <nav className="container flex items-center justify-between h-[70px] py-2">
          {" "}
          {/* Sección Logo */}
          <div className="text-2xl md:text-3xl text-white">
            <a href="#">
              {" "}
              YOU
              <span className="inline-block font-bold text-primary">WEB</span>
            </a>
          </div>
          {/* Inicio Sección Escritorio */}
          {/* // 2. Clase hidden md:block */}
          <div className="hidden md:block">
            {/* // 3. Clases flex | items-center | gap-4 */}
            <ul className="flex items-center gap-8">
              <li>Principal</li>
              <li>Acerca</li>
              <li>Contacto</li>
              <li>
                <div className="flex items-center gap-4">
                  <div className="rounded-md p-2 hover:bg-primary/90">
                    {/* // 1. Agregando imagen al componente */}
                    <Image
                      src="/icons/phone.svg"
                      alt="phone"
                      width={35}
                      height={35}
                    />
                  </div>
                  <div>
                    <p>Llama ya!</p>
                    <p>
                      <a href="tel:+573209573682">+573209573682</a>
                    </p>
                  </div>
                </div>
              </li>
              {/* // 1. Agregando imagen al componente */}
              <Image src="/icons/sun.svg" alt="sun" width={28} height={28} />
            </ul>
          </div>
          {/* Fin Sección Escritorio */}
          {/* Fin Sección Escritorio */}
          {/* 1. Sección Móvil */}
          <div className="flex items-center gap-4 md:hidden ">
            <Image src="/icons/sun.svg" alt="sun" width={28} height={28} />
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
