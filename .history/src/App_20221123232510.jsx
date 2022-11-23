import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faMagento } from "@fortawesome/free-brands-svg-icons";
// import {faLig}
import {
  faLocationDot,
  faMagnifyingGlass,
  faSun,
  faTemperatureEmpty,
  faDroplet,
  faEyeSlash,
  faGlassWaterDroplet,
  faWind,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const date = "font-[900] text-lg";
  const detailDate = "text-sm text-[#888]";

  const contentTop = "mt-[20px] flex items-center gap-x-10 mb-20";
  const contentSearch =
    "content__search p-4 flex items-center gap-x-3 flex-1 rounded-xl bg-slate-100";

  return (
    <div className="p-5 mx-auto max-w-7xl">
      <div className="flex justify-between">
        <section className="content max-w-3xl">
          <div className={contentTop}>
            <div className="flex-col">
              <h3 className={date}>January 2022</h3>
              <div className={detailDate}>Thursday, Jan 4, 2022</div>
            </div>
            <div className={contentSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input
                className="w-full bg-transparent"
                type="text"
                placeholder="Search location here"
              />
            </div>
          </div>
          <div className="content__detail mb-20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Today overview</h4>
              <div className="">
                <button className="text-sm font-medium text-[#009EFF]">
                  More detail
                </button>
              </div>
            </div>
            <div>
              <div className="content__detail-box grid grid-cols-3 gap-4 mt-6">
                <div className="content__detail-item p-5 flex items-center gap-x-6 bg-slate-100 rounded-xl">
                  <i></i>
                  <div className="speed flex flex-col">
                    <h4 className="text-[#888]">Wind speed</h4>
                    <span className="text-[24px] font-semibold">12km/h</span>
                  </div>
                  <span className="text-[#888]">2km/h</span>
                </div>
                <div className="content__detail-item p-5 flex items-center gap-x-6 bg-slate-100 rounded-xl">
                  <i></i>
                  <div className="speed flex flex-col">
                    <h4 className="text-[#888]">Wind speed</h4>
                    <span className="text-[24px] font-semibold">12km/h</span>
                  </div>
                  <span className="text-[#888]">2km/h</span>
                </div>
                <div className="content__detail-item p-5 flex items-center gap-x-6 bg-slate-100 rounded-xl">
                  <i></i>
                  <div className="speed flex flex-col">
                    <h4 className="text-[#888]">Wind speed</h4>
                    <span className="text-[24px] font-semibold">12km/h</span>
                  </div>
                  <span className="text-[#888]">2km/h</span>
                </div>
                <div className="content__detail-item p-5 flex items-center gap-x-6 bg-slate-100 rounded-xl">
                  <i></i>
                  <div className="speed flex flex-col">
                    <h4 className="text-[#888]">Wind speed</h4>
                    <span className="text-[24px] font-semibold">12km/h</span>
                  </div>
                  <span className="text-[#888]">2km/h</span>
                </div>
                <div className="content__detail-item p-5 flex items-center gap-x-6 bg-slate-100 rounded-xl">
                  <i></i>
                  <div className="speed flex flex-col">
                    <h4 className="text-[#888]">Wind speed</h4>
                    <span className="text-[24px] font-semibold">12km/h</span>
                  </div>
                  <span className="text-[#888]">2km/h</span>
                </div>
                <div className="content__detail-item p-5 flex items-center gap-x-6 bg-slate-100 rounded-xl">
                  <i></i>
                  <div className="speed flex flex-col">
                    <h4 className="text-[#888]">Wind speed</h4>
                    <span className="text-[24px] font-semibold">12km/h</span>
                  </div>
                  <span className="text-[#888]">2km/h</span>
                </div>
              </div>
            </div>
          </div>
          <div className="content__detail mb-20">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Weather 24h</h4>
              <div className="">
                <button className="text-sm font-medium text-[#009EFF]">
                  24h
                </button>
              </div>
            </div>
            <div>
              <div className="content__detail-box grid grid-cols-3 gap-4 mt-6">
                <div className="content__detail-item p-5 flex items-center gap-x-6 bg-slate-100 rounded-xl">
                  <i></i>
                  <div className="speed flex flex-col">
                    <h4 className="text-[#888]">00:00</h4>
                    <span className="text-[24px] font-semibold">24 / 24</span>
                    <span>May cum</span>
                  </div>
                  <span className="text-[#888]">96%</span>
                </div>
                <div className="content__detail-item p-5 flex items-center gap-x-6 bg-slate-100 rounded-xl">
                  <i></i>
                  <div className="speed flex flex-col">
                    <h4 className="text-[#888]">00:00</h4>
                    <span className="text-[24px] font-semibold">24 / 24</span>
                    <span>May cum</span>
                  </div>
                  <span className="text-[#888]">96%</span>
                </div>
                <div className="content__detail-item p-5 flex items-center gap-x-6 bg-slate-100 rounded-xl">
                  <i></i>
                  <div className="speed flex flex-col">
                    <h4 className="text-[#888]">00:00</h4>
                    <span className="text-[24px] font-semibold">24 / 24</span>
                    <span>May cum</span>
                  </div>
                  <span className="text-[#888]">96%</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content__right text-white min-w-[320px]">
          <div className="bg-slate-600 p-5 h-full rounded-xl">
            <div className="flex flex-col gap-x-12 justify-between mt-2 mb-5 ">
              <div className="flex flex-col">
                <h3 className="flex items-baseline">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className="ml-2 text-xl ">Binh Duong</span>
                </h3>
                <span className="text-sm">Đã cập nhật 2 phút trước</span>
              </div>
              <div className="flex">
                <img
                  src="https://data.thoitiet.vn/weather/icons/04n@2x.png"
                  alt=""
                />
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
            <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderGray text-sm">
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
            <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderGray text-sm">
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
            <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderGray text-sm">
              <h2 className="flex items-center w-[150px]">
                <FontAwesomeIcon className="" icon={faDroplet} />
                <span className="w-[120px] ml-auto">Độ ẩm</span>
              </h2>
              <h3 className="flex gap-x-1">
                <span>23%</span>
              </h3>
            </div>
            <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderGray text-sm">
              <h2 className="flex items-center w-[150px]">
                <FontAwesomeIcon className="" icon={faEyeSlash} />
                <span className="w-[120px] ml-auto">Tầm nhìn</span>
              </h2>
              <h3 className="flex gap-x-1">
                <span>10 km</span>
              </h3>
            </div>
            <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderGray text-sm">
              <h2 className="flex items-center w-[150px]">
                <FontAwesomeIcon className="" icon={faWind} />
                <span className="w-[120px] ml-auto">Gió</span>
              </h2>
              <h3 className="flex gap-x-1">
                <span>2.57 km/giờ</span>
              </h3>
            </div>
            <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderGray text-sm">
              <h2 className="flex items-center w-[150px]">
                <FontAwesomeIcon className="" icon={faGlassWaterDroplet} />
                <span className="w-[120px] ml-auto">Điểm ngưng</span>
              </h2>
              <h3 className="flex gap-x-1">
                <span>22 °C</span>
              </h3>
            </div>
            <div className="mt-2 pb-2 flex justify-between items-center border-b-[1px] border-borderGray text-sm">
              <h2 className="flex items-center w-[150px]">
                <FontAwesomeIcon className="" icon={faUmbrellaBeach} />
                <span className="w-[120px] ml-auto">Chỉ số UV</span>
              </h2>
              <h3 className="flex gap-x-1">
                <span>0</span>
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
