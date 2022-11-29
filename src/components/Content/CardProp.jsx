import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTemperatureEmpty,
  faCaretDown,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

const CardProp = (props) => {
  return (
    <div className="weather-card hover:scale-110 cursor-pointer duration-700 shadow-lg mt-6" onClick={props.handleOnclick}>
      <h1 className="text-center text-xl font-bold">{props.provinceName}</h1>
      <div className="content__detail-item p-5 flex items-center gap-x-6 bg-backgroundSecondary rounded-xl">
        <FontAwesomeIcon className="text-[#df4848]" icon={faTemperatureEmpty} />
        <div className="speed flex flex-col">
          <h4 className="text-[#888]">Thấp/Cao</h4>
          <span className="text-[24px] font-semibold">{props.lowestTempurature}/{props.highestTempurature}</span>
        </div>
        <h6 className="text-[#888]">
          <FontAwesomeIcon className="text-[#3683ff]" icon={faDroplet} />
          <span className="ml-2">{props.humidity}%</span>
        </h6>
      </div>
    </div>
  );
};

export default CardProp;
