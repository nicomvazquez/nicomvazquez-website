import React from "react";

function ProyectTag({ proyect }) {
  return (
    <div className="w-full hover:bg-neutral-600 p-4 md:p-7 hover:-translate-y-3 transition-all rounded-md">
      <img src={proyect.img} alt="" className="rounded-md" />
      <h1 className="text-2xl md:text-3xl my-3 font-semibold">
        {proyect.title}
      </h1>
      <div className="mt-5 flex justify-between">
        <a
          href={proyect.link}
          className="text-xl bg-yellow-500 py-1 px-3 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all"
        >
          Visitar
        </a>
      </div>
    </div>
  );
}

export default ProyectTag;
