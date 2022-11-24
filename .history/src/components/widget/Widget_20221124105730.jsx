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
      <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderPrimary border-dashed text-sm">
        <h2 className="flex items-center w-[150px]">
          <FontAwesomeIcon className="" icon={faSun} />
          <span className="w-[120px] ml-auto">Mặt trời mọc / lặn</span>
        </h2>
        <h3 className="flex gap-x-1">
          <span>06:11 AM</span>
          <span>/</span>
          <span>17:13 PM</span>
        </h3>
      </div>
      <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderPrimary border-dashed text-sm">
        <h2 className="flex items-center w-[150px]">
          <FontAwesomeIcon className="" icon={faTemperatureEmpty} />
          <span className="w-[120px] ml-auto">Thấp / cao</span>
        </h2>
        <h3 className="flex gap-x-1">
          <span>23°</span>
          <span>/</span>
          <span>27°</span>
        </h3>
      </div>
      <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderPrimary border-dashed text-sm">
        <h2 className="flex items-center w-[150px]">
          <FontAwesomeIcon className="" icon={faDroplet} />
          <span className="w-[120px] ml-auto">Độ ẩm</span>
        </h2>
        <h3 className="flex gap-x-1">
          <span>23%</span>
        </h3>
      </div>
      <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderPrimary border-dashed text-sm">
        <h2 className="flex items-center w-[150px]">
          <FontAwesomeIcon className="" icon={faEyeSlash} />
          <span className="w-[120px] ml-auto">Tầm nhìn</span>
        </h2>
        <h3 className="flex gap-x-1">
          <span>10 km</span>
        </h3>
      </div>
      <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderPrimary border-dashed text-sm">
        <h2 className="flex items-center w-[150px]">
          <FontAwesomeIcon className="" icon={faWind} />
          <span className="w-[120px] ml-auto">Gió</span>
        </h2>
        <h3 className="flex gap-x-1">
          <span>2.57 km/giờ</span>
        </h3>
      </div>
      <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderPrimary border-dashed text-sm">
        <h2 className="flex items-center w-[150px]">
          <FontAwesomeIcon className="" icon={faGlassWaterDroplet} />
          <span className="w-[120px] ml-auto">Điểm ngưng</span>
        </h2>
        <h3 className="flex gap-x-1">
          <span>22 °C</span>
        </h3>
      </div>
      <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderPrimary border-dashed text-sm">
        <h2 className="flex items-center w-[150px]">
          <FontAwesomeIcon className="" icon={faUmbrellaBeach} />
          <span className="w-[120px] ml-auto">Chỉ số UV</span>
        </h2>
        <h3 className="flex gap-x-1">
          <span>0</span>
        </h3>
      </div>
    </div>
  );
};

export default Widget;
