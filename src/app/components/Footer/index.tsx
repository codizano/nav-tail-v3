import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  from-orange-500 to-[#ed6524]">
      <div className="container py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        {/*    <div className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-white hover:text-gray-900"
              >
                Principal
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-white hover:text-gray-900"
              >
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-white hover:text-gray-900"
              >
                Contact
              </a>
            </div>
          </div> */}
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://t.me/ricardootalora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-stone-300 transition duration-300 ease-in-out"
          >
            <FaTelegram />
          </a>

          <a
            href="https://wa.me/573133741678?text=Hola%2C+quiero+más+información+sobre+sus+servicios"
            className="text-white hover:text-stone-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-otalora-luna"
            className="text-white hover:text-stone-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/codizano"
            className="text-white hover:text-stone-300"
          >
            <FaGithub />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-white">
          © 2024 CodiZano, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
