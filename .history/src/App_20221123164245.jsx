import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function App() {
  const date = "font-[900] text-lg";
  const detailDate = "text-sm text-[#888]";

  const contentTop = "mt-[20px] flex items-center gap-x-10 mb-20";
  const contentSearch =
    "content__search p-4 flex items-center gap-x-3 flex-1 rounded-xl bg-slate-100";

  return (
    <div className="container p-5 mx-auto">
      <div className="flex justify-between">
        <section className="content max-w-3xl">
          <div className={contentTop}>
            <div className="flex-col">
              <h3 className={date}>January 2022</h3>
              <div className={detailDate}>Thursday, Jan 4, 2022</div>
            </div>
            <div className={contentSearch}>
              <FiSearch />
              <input
                className="w-full bg-transparent"
                type="text"
                placeholder="Search location here"
              />
            </div>
          </div>
          <div className="content__detail">
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
        </section>
        <section className="content__right">
          <div className="bg-slate-600 p-5">
            <div className="flex items-center gap-x-12 justify-between mt-2 mb-5 text-white">
              <div className="flex flex-col">
                <h3 className="text-lg">Majasem Barat</h3>
                <span className="text-[#888]">Tegal, Indonesia</span>
              </div>
              <h4>08:54AM</h4>
            </div>
            <div className="mt-16 flex justify-between items-center">
              <div className="">
                <h2 className="text-4xl">20c</h2>
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
