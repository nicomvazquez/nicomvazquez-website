import React from "react";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProyectTag({ proyect }) {
  return (
    <div className="w-full">
      <img src={proyect.img} alt="" className="rounded-xl" />
      <h1 className="text-2xl md:text-3xl my-3 font-semibold">{proyect.title}</h1>
      <div className="flex">
        <a href={proyect.link} className="bg-cyan-400 text-xl text-black font-semibold py-2 px-4 rounded-lg hover:scale-110 hover:bg-cyan-500 transition-all flex items-center gap-2">
          Visitar <FaArrowUpRightFromSquare />
        </a>
      </div>
    </div>
  );
}

export default ProyectTag;
