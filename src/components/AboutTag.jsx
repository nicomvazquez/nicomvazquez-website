import React from "react";

import { FaMailBulk } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";

function AboutTag(props) {
  return (
    <div className="p-4 flex items-center gap-10 rounded-xl hover:bg-neutral-700 hover:translate-x-3 transition-all">
      <div className="p-3 rounded-lg border">
        <div className="text-3xl w-10 h-10 flex justify-center items-center">
          {props.icon === "FaMailBulk" && <FaMailBulk />}
          {props.icon === "FaComputer" && <FaComputer />}
          {props.icon === "FaRegLightbulb" && <FaRegLightbulb />}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold pl-3 border-l-4 border-l-yellow-500">{props.title}</h1>
        <p className="text-neutral-400 pt-2">{props.description}</p>
      </div>
    </div>
  );
}

export default AboutTag;
