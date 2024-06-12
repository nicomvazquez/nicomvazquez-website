import React from "react";

import { MdWeb } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";

function ServiceTag(props) {
  return (
    <div className="text-left border p-5 max-w-md rounded-xl shadow-xl hover:-translate-y-3 transition-all">
      <div className="flex gap-5 items-center">
        <div className="border-2 w-14 h-14 flex justify-center items-center rounded-lg text-3xl">
          {props.icon === "web" && <MdWeb />}
          {props.icon === "mobile" && <CiMobile3 />}
          {props.icon === "ecommerce" && <IoCartOutline />}
          {props.icon === "design" && <FaRegLightbulb />}
        </div>
        <h2 className="text-xl font-semibold border-l-4 border-l-cyan-400 pl-3">
          {props.title}
        </h2>
      </div>
      <div className="mt-7">
        <p className="mt-3 text-neutral-600">{props.description}</p>
      </div>
    </div>
  );
}

export default ServiceTag;
