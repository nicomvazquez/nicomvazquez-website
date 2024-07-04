import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import { navlinks } from "../constants";

function Futher() {
  return (
    <section className="flex justify-between border-y border-y-neutral-400 py-10 flex-col md:flex-row gap-10">
      <div className="flex flex-col gap-2">
        <Link to={"/"} className="text-4xl py-3 font-bold">
          NICO<span className="text-yellow-500">.</span>DEV
        </Link>
        <p className="text-lg text-neutral-400">
          Dedicación y pasión en el desarrollo de software.
        </p>
        <div className="flex mt-5">
          <Link
            to={"/contacto"}
            className="text-xl bg-yellow-500 py-2 px-4 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all"
          >
            Contactar ahora
          </Link>
        </div>
      </div>

      <div className="flex gap-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">
            Site map<span className="text-yellow-500">.</span>
          </h1>
          {navlinks.map((i) => (
            <Scroll
              to={i.path}
              smooth={true}
              offset={-150}
              duration={500}
              key={i.name}
              className="text-base text-neutral-400 cursor-pointer hover:text-white transition-all"
            >
              {i.name}
            </Scroll>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">
            Comunidad<span className="text-yellow-500">.</span>
          </h1>
          <a
            href="https://www.instagram.com/nicomvazquez.dev/"
            className="text-base text-neutral-400 hover:text-white transition-all"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@nicomvazquez_dev"
            className="text-base text-neutral-400 hover:text-white transition-all"
          >
            TikTok
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-vazquez-2b6812284/"
            className="text-base text-neutral-400 hover:text-white transition-all"
          >
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
}

export default Futher;
