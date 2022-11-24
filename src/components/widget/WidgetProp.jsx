import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faSun,
  faTemperatureEmpty,
  faDroplet,
  faEyeSlash,
  faGlassWaterDroplet,
  faWind,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

const WidgetProp = ({ name, icon }) => {
  return (
    <div className="mt-2 p-4 rounded-xl flex justify-between items-center border-[1px] border-borderPrimary text-sm bg-backgroundSecondary">
      <h2 className="flex items-center w-[150px]">
        <FontAwesomeIcon className="" icon={icon} />
        <span className="w-[120px] ml-auto">{name}</span>
      </h2>
      <h3 className="flex gap-x-1">
        <span>05:00 AM</span>
        <span>/</span>
        <span>17:13 PM</span>
      </h3>
    </div>
  );
};

export default WidgetProp;
