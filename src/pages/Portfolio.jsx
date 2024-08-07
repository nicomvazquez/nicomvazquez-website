import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex justify-between items-center flex-col md:flex-row gap-16 md:gap-0"
    >
      <div>
        <h1 className="text-5xl md:text-7xl font-semibold">
          Nuestro portfolio<span className="text-yellow-500">.</span>
        </h1>
        <p className="text-xl text-neutral-400 my-5">
          Aquí podrás encontrar algunos de nuestros proyectos.
        </p>

        <div className="flex">
          <Link
            to={"/portfolio"}
            className="text-xl bg-yellow-500 py-2 px-4 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all"
          >
            Ver portfolio
          </Link>
        </div>
      </div>
      <div className="max-w-3xl">
        <img src="./portfolio.png" className="rounded-xl" alt="" />
      </div>
    </section>
  );
}

export default Portfolio;
