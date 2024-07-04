import React from "react";

import { proyects } from "../constants";

import { ProyectTag } from "../components";

function PortfolioPage() {
  return (
    <section>
      <h1 className="text-6xl md:text-7xl font-semibold">
        Nuestro portfolio<span className="text-yellow-500">.</span>
      </h1>
      <p className="text-xl text-neutral-400 my-5">
        Aquí podrás encontrar algunos de nuestros proyectos
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 my-24">
        {proyects.map((proyect) => (
          <ProyectTag key={proyect.title} proyect={proyect} />
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;
