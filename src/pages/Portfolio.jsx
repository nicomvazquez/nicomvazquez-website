import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section id="portfolio" className="flex justify-between items-center flex-col md:flex-row gap-16 md:gap-0">
      <div>
        <h1 className="text-5xl md:text-7xl font-semibold">Nuestro portfolio.</h1>
        <p className="text-xl text-neutral-400 my-5">
          Aquí podrás encontrar algunos de nuestros proyectos.
        </p>

        <div className="flex">
          <Link to={"/portfolio"} className="bg-cyan-400 text-xl text-black font-semibold py-2 px-4 rounded-lg hover:scale-110 hover:bg-cyan-500 transition-all">
            Ver portfolio
          </Link>
        </div>
      </div>
      <div className="max-w-xl">
        <img src="./photo.png" className="rounded-xl" alt="" />
      </div>
    </section>
  );
}

export default Portfolio;
