import React from "react";

import { servicesTags } from "../constants";

import { ServiceTag } from "../components";

function Services() {
  return (
    <section id="services" className="text-left md:text-center">
      <h2 className="text-5xl md:text-6xl font-bold">Servicios<span className="text-yellow-500">.</span></h2>
      <p className="my-10 text-xl">
        Creamos soluciones de software para todo tipo de clientes,
        proporcionando todo lo que su negocio necesita: 
      </p>

      <div className="flex justify-between gap-10 flex-col md:flex-row">
        {servicesTags.map((i) => (
          <ServiceTag
            key={i.title}
            title={i.title}
            description={i.description}
            icon={i.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
