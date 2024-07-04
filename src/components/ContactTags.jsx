import React from "react";

import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ContactTags(props) {
  return (
    <div className="text-left border-b border-b-yellow-500 p-5 w-full">
      <div className="flex gap-5 items-center">
        <div className="border-2 w-14 h-14 flex justify-center items-center rounded-lg text-3xl">
            {props.icon === "mail" && <BiLogoGmail />}
            {props.icon === "whatsapp" && <FaWhatsapp />}
            {props.icon === "location" && <FaLocationDot />}
        </div>
        <h2 className="text-2xl font-semibold border-l-4 border-l-yellow-500 pl-3">
          {props.title}
        </h2>
      </div>
      <div className="mt-7">
        <p className="mt-3 text-xl text-neutral-300 hover:translate-x-5 hover:text-white transition-all">{props.description}</p>
      </div>
    </div>
  );
}

export default ContactTags;
