import React from "react";

function ContactForm() {
  return (
    <section className="flex gap-14 flex-col-reverse md:flex-row overflow-hidden">
      <div className="max-w-xl max-h-full overflow-hidden">
        <img src="./banner.png" className="rounded-2xl" alt="" />
      </div>
      <div className="flex flex-col w-full gap-14">
        <h1 className="text-5xl md:text-6xl font-semibold">
          Ponte en contacto<span className="text-yellow-500">.</span>
        </h1>
        <form action="" className="flex flex-col gap-5 text-xl">
          <div className="flex w-full gap-10">
            <input
              type="text"
              placeholder="Nombre"
              className="border w-full p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Correo"
              className="border w-full p-2 rounded-md"
            />
          </div>
          <input
            type="text"
            placeholder="Asunto"
            className="border p-2 rounded-md"
          />
          <textarea placeholder="Mensaje" className="border p-2 rounded-md" />
          <div>
            <button className="text-xl bg-yellow-500 py-2 px-4 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
