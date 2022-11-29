import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faSun,
  faTemperatureEmpty,
  faDroplet,
  faGlassWaterDroplet,
  faWind,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

const Widget = (props) => {
  const weather = useSelector((state) => state.weather.weather);

  const bgAirQuanlity = {
    "Tốt": "bg-green-600",
    "Khá": "bg-amber-400",
    "Trung bình": "bg-orange-700",
    "Kém": "bg-red-700",
    "Rất kém": "bg-fuchsia-700"
  }

  return (
    <div className="bg-backgroundPrimary p-5 rounded-xl shadow-2xl fixed min-w-[400px] min-h-[400px]">
      {weather && (
        <>
          <div className="flex flex-col gap-x-12 justify-between mt-2 mb-5 ">
            <div className="flex flex-col">
              <h3 className="flex items-baseline">
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="ml-2 text-xl ">{weather.provinceName}</span>
              </h3>
            </div>
            <div className="flex">
              <img
                src="https://data.thoitiet.vn/weather/icons/04n@2x.png"
                alt=""
              />
              <div className="flex items-center">
                <h4 className="text-[64px]">{weather.currentTemperature}°</h4>
                <div className="flex flex-col">
                  <h5 className="text-[20px]">C</h5>
                  <h5 className="text-[20px]">F</h5>
                </div>
              </div>
            </div>
          </div>
          <h3 className="font-semibold mb-6">{weather.overview}</h3>
          <div className="flex mt-1">
            <div>
              <FontAwesomeIcon icon={faTemperatureEmpty}/>
              <span className="ml-2 font-bold">Thấp/Cao:</span>
            </div>
            <div className="value ml-2 text-[#d9d9d9]">{weather.lowestTemperature}/{weather.highestTemperature}</div>
          </div>
          <div className="flex mt-1">
            <div>
              <FontAwesomeIcon icon={faDroplet}/>
              <span className="ml-2 font-bold">Độ ẩm:</span>
            </div>
            <div className="value ml-2 text-[#d9d9d9]">{weather.humidity*100}%</div>
          </div>
          <div className="flex  mt-1">
            <div>
              <FontAwesomeIcon icon={faEye}/>
              <span className="ml-2 font-bold">Tầm nhìn:</span>
            </div>
            <div className="value ml-2 text-[#d9d9d9]">{weather.vision} km</div>
          </div>
          <div className="flex  mt-1">
            <div>
              <FontAwesomeIcon icon={faWind}/>
              <span className="ml-2 font-bold">Gió:</span>
            </div>
            <div className="value ml-2 text-[#d9d9d9]">{weather.wind} km/giờ</div>
          </div>
          <div className="flex  mt-1">
            <div>
              <FontAwesomeIcon icon={faGlassWaterDroplet}/>
              <span className="ml-2 font-bold">Điểm ngưng:</span>
            </div>
            <div className="value ml-2 text-[#d9d9d9]">{weather.stopPoint} °C</div>
          </div>
          <div className="flex mt-1">
            <div>
              <FontAwesomeIcon icon={faSun}/>
              <span className="ml-2 font-bold">Chỉ số uv:</span>
            </div>
            <div className="value ml-2 text-[#d9d9d9]">{weather.uvIndex}</div>
          </div>
          <div className="mb-6 flex justify-between items-center mt-3">
            <h3 className="font-semibold">Chất lượng không khí:</h3>
            <h3 className= "px-4 py-1 rounded-lg ml-2">{weather.airQuality}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Widget;
