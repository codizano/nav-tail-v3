import React from "react";

const ProductFeatures = () => {
  return (
    <section className="xlg:h-screen">
      <div className="container bg-white overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 text-black">
          <div className="flex justify-center">
            <img
              className="object-cover w-3/4 "
              src="/home-page-img/devbook-cover.png"
              alt="image"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-black font-bold text-2xl md:text-6xl xl:text-7xl">
              Company retreats
            </div>
            <ul className="list-none mb-4">
              <li className="flex items-center mb-2">
                <img
                  className="mb-1"
                  src="/target-audience-img/user.svg"
                  alt="image"
                />
                <div className="ml-2">
                  <h5 className="font-bold mb-1 text-left">Producto 1</h5>
                  <p className="text-sm text-gray-600">
                    Descripción del producto 1
                  </p>
                </div>
              </li>
              <li className="flex items-center mb-2">
                <img
                  className="mb-1"
                  src="/target-audience-img/user.svg"
                  alt="image"
                />
                <div className="ml-2">
                  <h5 className="font-bold mb-1 text-left">Producto 1</h5>
                  <p className="text-sm text-gray-600">
                    Descripción del producto 1
                  </p>
                </div>
              </li>
              <li className="flex items-center mb-2">
                <img
                  className="mb-1"
                  src="/target-audience-img/user.svg"
                  alt="image"
                />
                <div className="ml-2">
                  <h5 className="font-bold mb-1 text-left">Producto 1</h5>
                  <p className="text-sm text-gray-600">
                    Descripción del producto 1
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
