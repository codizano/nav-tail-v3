import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  from-black to-b3f06e">
      <div className="container py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center -mx-5 -my-2">
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
        </div>
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <FaGithub />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2021 YouWeb, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
