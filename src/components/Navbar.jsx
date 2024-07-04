import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import { navlinks } from "../constants";

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Link to={"/"} className="text-4xl py-3 font-bold">NICO<span className="text-yellow-500">.</span>DEV</Link>

      <div className="hidden md:flex gap-10">
        {navlinks.map((i) => (
          <Scroll

            to={i.path}
            smooth={true}
            offset={-150}
            duration={500}
            key={i.name}
            className="text-xl font-medium hover:text-yellow-500 hover:scale-110 transition-all cursor-pointer"
          >
            {i.name}
          </Scroll>
        ))}
      </div>
        
      <Link to={"/contacto"} className="text-xl bg-yellow-500 py-1 px-3 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all">
        Contactar
      </Link>
    </nav>
  );
}

export default Navbar;
