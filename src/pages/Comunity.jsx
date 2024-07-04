import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

function Comunity() {
  return (
    <section id="contact" className="text-left md:text-center">
      <h1 className="text-5xl md:text-6xl font-semibold mb-10">
        Se parte de nuestra comunidad<span className="text-yellow-500">.</span>
      </h1>

      <div className="flex justify-center items-center p-10 gap-10 flex-col md:flex-row">
        <a
          href="https://www.instagram.com/nicomvazquez.dev/"
          className="w-[300px] flex flex-col items-center gap-2 p-10 text-8xl rounded-md hover:bg-neutral-800 hover:-translate-y-3 transition-all  "
        >
          <FaInstagram />
          <h1 className="text-xl font-semibold pl-3 border-l-2 border-l-yellow-500">
            Instagram
          </h1>
        </a>
        <a
          href="https://www.tiktok.com/@nicomvazquez_dev"
          className="w-[300px] flex flex-col items-center gap-2 p-10 text-8xl rounded-md hover:bg-neutral-800 hover:-translate-y-3 transition-all "
        >
          <FaTiktok />
          <h1 className="text-xl font-semibold pl-3 border-l-2 border-l-yellow-500">
            TikTok
          </h1>
        </a>
        <a
          href="https://www.linkedin.com/in/nicolas-vazquez-2b6812284/"
          className="w-[300px] flex flex-col items-center gap-2 p-10 text-8xl rounded-md hover:bg-neutral-800 hover:-translate-y-3 transition-all"
        >
          <FaLinkedinIn />
          <h1 className="text-xl font-semibold pl-3 border-l-2 border-l-yellow-500">
            Linkedin
          </h1>
        </a>
      </div>
    </section>
  );
}

export default Comunity;
