import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import { FaArrowDownLong } from "react-icons/fa6";

function Home() {
  const texts = [
    "Apps mobiles",
    "Ecommerce",
    "Diseño web",
    "Inteligencia artificial",
    "Apps de gestion",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Cambia cada 2 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <section
      id="home"
      className="text-center py-48 flex justify-center items-center  md:items-start flex-col "
    >
      <h1 className="text-2xl md:text-3xl font-semibold">
        Diceñando tu software.
      </h1>

      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <h1 className="font-semibold text-6xl md:text-8xl my-3 text-wrap">
          {texts[index]}<span className="text-yellow-500">.</span>
        </h1>
      </motion.div>

      <p className="my-12 text-lg md:text-xl text-neutral-400">
        Dedicación y pasión en el desarrollo de software.
      </p>

      <div className="flex gap-5 justify-center items-center">
        <Link
          to={"/contacto"}
          className="text-xl bg-yellow-500 py-2 px-4 rounded-lg hover:scale-110 hover:bg-yellow-600 transition-all"
        >
          Contactar ahora
        </Link>
        <Link
          to={"/portfolio"}
          className="text-xl font-semibold py-2 px-4 rounded-lg border hover:scale-110 transition-all"
        >
          Portfolio
        </Link>
      </div>

      <Scroll
        className="animate-bounce text-6xl mt-20 cursor-pointer md:hidden"
        to={"about"}
        smooth={true}
        offset={-150}
        duration={500}
      >
        <FaArrowDownLong />
      </Scroll>
    </section>
  );
}

export default Home;
