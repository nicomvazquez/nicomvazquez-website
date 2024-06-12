import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function Comunity() {
  return (
    <section className="text-left md:text-center">
      <h1 className="text-5xl md:text-6xl font-semibold mb-10">
        Se parte de nuestra comunidad.
      </h1>

      <div className="flex justify-center p-10 gap-10 flex-col md:flex-row">
        <a
          href="#"
          className="w-[300px] flex flex-col items-center gap-2 p-10 text-8xl rounded-md hover:bg-neutral-900 hover:-translate-y-3 transition-all  "
        >
          <FaInstagram />
          <h1 className="text-xl font-semibold pl-3 border-l-2 border-l-cyan-300">
            Instagram
          </h1>
        </a>
        <a
          href="#"
          className="w-[300px] flex flex-col items-center gap-2 p-10 text-8xl rounded-md hover:bg-neutral-900 hover:-translate-y-3 transition-all "
        >
          <FaTiktok />
          <h1 className="text-xl font-semibold pl-3 border-l-2 border-l-cyan-300">
            TikTok
          </h1>
        </a>
        <a
          href="#"
          className="w-[300px] flex flex-col items-center gap-2 p-10 text-8xl rounded-md hover:bg-neutral-900 hover:-translate-y-3 transition-all"
        >
          <FaLinkedinIn />
          <h1 className="text-xl font-semibold pl-3 border-l-2 border-l-cyan-300">
            Linkedin
          </h1>
        </a>
      </div>
    </section>
  );
}

export default Comunity;
