import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section id="contact" className="flex justify-between gap-10 md:items-end flex-col md:flex-row">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">
          Ponte en contacto con nosotros y
          <br /> trabajemos juntos en tus proyectos.
        </h1>
      </div>
      <div className="flex">
            <Link
              to={"/contacto"}
              className="bg-cyan-400 text-xl text-black font-semibold py-2 px-4 rounded-lg hover:scale-110 hover:bg-cyan-500 transition-all"
            >
              Contactar ahora
            </Link>
          </div>
    </section>
  );
}

export default Contact;
