import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faMagento } from "@fortawesome/free-brands-svg-icons";
// import {faLig}
import {
  faLocationDot,
  faMagnifyingGlass,
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
        <section className="content__right text-white">
          <div className="bg-slate-600 p-5 h-full">
            <div className="flex flex-col items-center gap-x-12 justify-between mt-2 mb-5 ">
              <div className="flex flex-col">
                <h3 className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span className="ml-2 text-xl ">Binh Duong</span>
                </h3>
                <span className="text-sm">Đã cập nhật 2 phút trước</span>
              </div>
              <div className="flex items-center">
                <img
                  src="https://data.thoitiet.vn/weather/icons/04n@2x.png"
                  alt=""
                />
                <div className="">
                  <h4 className="text-[64px]">25°</h4>
                  <div className="flex flex-col">
                    <h2 className="">C</h2>
                    <h2 className="">F</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1 mb-4 flex justify-between items-center border-b-[1px] border-[#f8f8f8]">
              <div className="">
                <h2 className="text-xl">20c</h2>
              </div>
              <h3>Dramatic cloudy</h3>
            </div>
            <div className="mt-1 mb-4 flex justify-between items-center border-b-[1px] border-[#f8f8f8]">
              <div className="">
                <h2 className="text-xl">20c</h2>
              </div>
              <h3>Dramatic cloudy</h3>
            </div>
            <div className="mt-1 mb-4 flex justify-between items-center border-b-[1px] border-[#f8f8f8]">
              <div className="">
                <h2 className="text-xl">20c</h2>
              </div>
              <h3>Dramatic cloudy</h3>
            </div>
            <div className="mt-1 mb-4 flex justify-between items-center border-b-[1px] border-[#f8f8f8]">
              <div className="">
                <h2 className="text-xl">20c</h2>
              </div>
              <h3>Dramatic cloudy</h3>
            </div>
            <div className="mt-1 mb-4 flex justify-between items-center border-b-[1px] border-[#f8f8f8]">
              <div className="">
                <h2 className="text-xl">20c</h2>
              </div>
              <h3>Dramatic cloudy</h3>
            </div>
            <div className="mt-1 mb-4 flex justify-between items-center border-b-[1px] border-[#f8f8f8]">
              <div className="">
                <h2 className="text-xl">20c</h2>
              </div>
              <h3>Dramatic cloudy</h3>
            </div>
            <div className="mt-1 mb-4 flex justify-between items-center border-b-[1px] border-[#f8f8f8]">
              <div className="">
                <h2 className="text-xl">20c</h2>
              </div>
              <h3>Dramatic cloudy</h3>
            </div>
            <div className="mt-1 mb-4 flex justify-between items-center border-b-[1px] border-[#f8f8f8]">
              <div className="">
                <h2 className="text-xl">20c</h2>
              </div>
              <h3>Dramatic cloudy</h3>
            </div>
            <div className="mt-1 mb-4 flex justify-between items-center border-b-[1px] border-[#f8f8f8]">
              <div className="">
                <h2 className="text-xl">20c</h2>
              </div>
              <h3>Dramatic cloudy</h3>
            </div>
            <div className="mt-1 mb-4 flex justify-between items-center border-b-[1px] border-[#f8f8f8]">
              <div className="">
                <h2 className="text-xl">20c</h2>
              </div>
              <h3>Dramatic cloudy</h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
