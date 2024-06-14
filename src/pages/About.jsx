import React from "react";
import { Link } from "react-router-dom";

import { AboutTag } from "../components";

import { aboutTags } from "../constants";

function About() {
  return (
    <section id="about" className="">
      <h1 className="text-5xl md:text-6xl text-left font-semibold mb-10">
        Trabaja con nosotros.
      </h1>

      <div className="flex gap-16 md:gap-32 justify-between flex-col md:flex-row">
        <div className="flex flex-col justify-between">
          <p className="text-neutral-400 text-left text-xl">
            Trabajar con nosotros será muy beneficioso para usted y su negocio.
            Colaboraremos estrechamente para proporcionarle las herramientas
            necesarias. Siga estos pasos para comenzar:
          </p>
          <div className="flex flex-col gap-5 my-10">
            {aboutTags.map((i) => (
              <AboutTag
                key={i.id}
                title={i.title}
                description={i.description}
                icon={i.icon}
              />
            ))}
          </div>

          <div className="flex">
            <Link
              to={"/contacto"}
              className="bg-cyan-400 text-xl text-black font-semibold py-2 px-4 rounded-lg hover:scale-110 hover:bg-cyan-500 transition-all"
            >
              Contactar ahora
            </Link>
          </div>
        </div>

        <div className="max-w-xl ">
          <img src="./banner.png" className="rounded-2xl" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
