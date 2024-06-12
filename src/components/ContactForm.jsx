import React from "react";

function ContactForm() {
  return (
    <section className="flex gap-14 flex-col-reverse md:flex-row">
      <div className="max-w-xl ">
        <img src="./iphone-x.jpg" className="rounded-2xl" alt="" />
      </div>
      <div className="flex flex-col w-full gap-10">
        <h1 className="text-5xl md:text-6xl font-semibold">Contacta con nosotros.</h1>
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
            <button className="bg-cyan-400 text-xl text-black font-semibold py-2 px-4 rounded-lg hover:scale-110 hover:bg-cyan-500 transition-all">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
