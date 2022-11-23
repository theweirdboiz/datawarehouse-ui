import { useState } from "react";
import { FiSearch } from "react-icons/fi";
function App() {
  const date = "font-[900] text-lg";
  const detailDate = "text-sm text-[#888]";

  return (
    <div className="container mx-auto">
      <div className="">
        <section className="content">
          <div className="mt-[20px] flex gap-x-10">
            <div className="flex-col">
              <h3 className={date}>January 2022</h3>
              <div className={detailDate}>Thursday, Jan 4, 2022</div>
            </div>
            <div className="content__search p-4 flex items-center gap-x-3 flex-1 rounded-xl bg-slate-400">
              <FiSearch />
              <input
                className="w-full bg-transparent"
                type="text"
                placeholder="Search location here"
              />
            </div>
          </div>
          <div className="content__detail">
            <div className="">
              <h4>Today overview</h4>
              <div className="">option</div>
              <div className="content__detail-box">
                <div className="content__detail-item">
                  <i></i>
                  <div className="speed">
                    Wind speed
                    <span>12km/h</span>
                  </div>
                  <span>2km/h</span>
                </div>
                <div className="content__detail-item">
                  <i></i>
                  <div className="speed">
                    Wind speed
                    <span>12km/h</span>
                  </div>
                  <span>2km/h</span>
                </div>
                <div className="content__detail-item">
                  <i></i>
                  <div className="speed">
                    Wind speed
                    <span>12km/h</span>
                  </div>
                  <span>2km/h</span>
                </div>
                <div className="content__detail-item">
                  <i></i>
                  <div className="speed">
                    Wind speed
                    <span>12km/h</span>
                  </div>
                  <span>2km/h</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
