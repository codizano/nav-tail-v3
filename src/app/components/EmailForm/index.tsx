"use client";
// Add ref at the beginning of the component definition
import React, { FormEvent, useState, useRef } from "react";
import axios from "axios";

type Props = {};

interface State {
  isLoading: boolean;
  errorMessage?: string;
  localEmail: string;
}

const EmailForm: React.FC<Props> = () => {
  const [state, setState] = useState<State>({
    isLoading: false,
    localEmail: "",
  });

  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const email = emailInputRef.current?.value || "";

    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      await axios.post("/api/emails", { email });
      alert("Email sent successfully!");
      setState((prev) => ({ ...prev, isLoading: false, localEmail: "" }));
      resetForm();
      emailInputRef.current?.focus();
    } catch (err) {
      if (!navigator.onLine) {
        setState((prev) => ({
          ...prev,
          errorMessage:
            "You are offline. Please check your internet connection.",
        }));
      } else {
        setState((prev) => ({
          ...prev,
          errorMessage: "An error occurred while sending your email.",
        }));
      }
      console.log(err);
      setState((prev) => ({ ...prev, isLoading: false }));
    } finally {
      setTimeout(
        () => setState((prev) => ({ ...prev, errorMessage: "" })),
        5000
      );
    }
  };

  const resetForm = () => {
    setState((prev) => ({ ...prev, localEmail: "" }));
  };

  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-5 max-w-screen-md">
        <h2 className="mb-6 font-bold text-3xl text-black capitalize tracking-widest">
          Obtén una muestra gratuita del libro
        </h2>
        <p className="text-base leading-relaxed mb-8 text-black text-center">
          Inscribe tu correo electrónico para obtener una copia gratuita de
          nuestro libro. Aprenderás conceptos claves y técnicas innovadoras que
          te ayudarán.
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2  lg:w-3/4 mx-auto bg-[#ed6524] text-white p-4 rounded shadow hover:bg-orange-500  transition duration-500 ease-in-out"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="correo electrónico"
            value={state.localEmail}
            onChange={() =>
              setState((prev) => ({
                ...prev,
                localEmail: emailInputRef.current?.value || "",
              }))
            }
            required
            ref={emailInputRef}
            className="py-2 w-full  h-[56px] border border-slate-400 rounded  px-4 bg-white text-black text-center"
          />
          <button type="submit" disabled={state.isLoading}>
            {state.isLoading ? "Enviando..." : "Enviar"}
          </button>
        </form>
        {state.errorMessage && (
          <p style={{ color: "red" }}>{state.errorMessage}</p>
        )}
      </div>
    </section>
  );
};

export default EmailForm;
