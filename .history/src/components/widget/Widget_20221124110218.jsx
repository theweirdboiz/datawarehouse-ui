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

import WidgetProp from "./WidgetProp";
const Widget = () => {
  return (
    <div className="bg-backgroundPrimary p-5 h-full rounded-xl">
      <div className="flex flex-col gap-x-12 justify-between mt-2 mb-5 ">
        <div className="flex flex-col">
          <h3 className="flex items-baseline">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="ml-2 text-xl ">Binh Duong</span>
          </h3>
          <span className="text-sm">Đã cập nhật 2 phút trước</span>
        </div>
        <div className="flex">
          <img src="https://data.thoitiet.vn/weather/icons/04n@2x.png" alt="" />
          <div className="flex items-center">
            <h4 className="text-[64px]">25°</h4>
            <div className="flex flex-col">
              <h5 className="text-[20px]">C</h5>
              <h5 className="text-[20px]">F</h5>
            </div>
          </div>
        </div>
      </div>
      <h3 className="font-semibold mb-6">Mây cụm</h3>
      <WidgetProp></WidgetProp>
      <WidgetProp></WidgetProp>
      <WidgetProp></WidgetProp>
      <WidgetProp></WidgetProp>
      <WidgetProp></WidgetProp>
      <WidgetProp></WidgetProp>
      <WidgetProp></WidgetProp>
    </div>
  );
};

export default Widget;
