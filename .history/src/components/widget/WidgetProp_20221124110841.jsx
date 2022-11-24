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

const WidgetProp = ({ icon }) => {
  return (
    <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderPrimary border-dashed text-sm">
      <h2 className="flex items-center w-[150px]">
        <FontAwesomeIcon className="" icon={icon} />
        <span className="w-[120px] ml-auto">{name}</span>
      </h2>
      <h3 className="flex gap-x-1">
        <span>{value}</span>
        <span>/</span>
        <span>17:13 PM</span>
      </h3>
    </div>
  );
};

export default WidgetProp;
