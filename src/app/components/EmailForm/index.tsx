import React from "react";

type Props = {};

const EmailForm: React.FC<Props> = () => {
  return (
    <section className="bg-stone-100 py-20 text-center">
      <div className="container mx-auto px-5 max-w-screen-md">
        <h2 className="mb-6 font-bold text-3xl text-black capitalize tracking-widest">
          Obtén una muestra gratuita del libro
        </h2>
        <p className="text-base leading-relaxed mb-8 text-black text-center">
          Inscribe tu correo electrónico para obtener una copia gratuita de
          nuestro libro revolucionario. <br />
          Aprenderás conceptos clave y técnicas innovadoras que te ayudarán a
          <br />
          superar los desafíos actuales.
        </p>
        <form
          action="/api/newsletter"
          method="post"
          className="w-full md:w-1/2  lg:w-3/4 mx-auto bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-700  transition duration-500 ease-in-out"
        >
          <input
            type="input"
            name="email"
            id="email"
            placeholder="correo electrónico"
            required
            className="py-2 w-full  h-[56px] border border-slate-400 rounded  px-4 bg-white text-center"
          />
          <button type="submit" className="mt-3 font-semibold">
            <span className="hover:text-blue-300">Enviar</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailForm;
