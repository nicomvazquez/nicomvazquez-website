import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import { navlinks } from "../constants";

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Link to={"/"} className="text-4xl py-3 font-extrabold">NICO.</Link>

      <div className="hidden md:flex gap-10">
        {navlinks.map((i) => (
          <Scroll

            to={i.path}
            smooth={true}
            offset={-150}
            duration={500}
            key={i.name}
            className="text-xl font-medium hover:text-cyan-400 hover:scale-110 transition-all cursor-pointer"
          >
            {i.name}
          </Scroll>
        ))}
      </div>
        
      <Link to={"/contacto"} className="bg-cyan-400 text-xl text-black font-semibold py-2 px-4 rounded-lg hover:scale-110 hover:bg-cyan-500 transition-all">
        Contactar ahora
      </Link>
    </nav>
  );
}

export default Navbar;
