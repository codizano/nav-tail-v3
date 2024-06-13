import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

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
          <a href="#" className="text-white hover:text-stone-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-stone-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-stone-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-stone-300">
            <FaGithub />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-white">
          © 2021 YouWeb, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
