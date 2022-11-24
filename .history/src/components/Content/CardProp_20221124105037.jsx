import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTemperatureEmpty,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const CardProp = () => {
  return (
    <div className="content__detail-item p-5 flex items-center gap-x-6 bg-backgroundSecondary shadow-lg rounded-xl">
      <FontAwesomeIcon className="" icon={faTemperatureEmpty} />
      <div className="speed flex flex-col">
        <h4 className="text-[#888]">Thấp/Cao</h4>
        <span className="text-[24px] font-semibold">24/27</span>
      </div>
      <h6 className="text-[#888]">
        <FontAwesomeIcon className="" icon={faCaretDown} />
        <span>20%</span>
      </h6>
    </div>
  );
};

export default CardProp;
