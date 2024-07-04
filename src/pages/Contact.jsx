import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className="flex justify-between gap-10 md:items-end flex-col md:flex-row">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold">
          Ponte en contacto y trabajemos
          <br /> juntos en tus proyectos<span className="text-yellow-500">.</span>
        </h1>
      </div>
      <div className="flex">
        <Link
          to={"/contacto"}
          className="text-xl bg-yellow-500 py-2 px-4 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all"
        >
          Contactar ahora
        </Link>
      </div>
    </section>
  );
}

export default Contact;
