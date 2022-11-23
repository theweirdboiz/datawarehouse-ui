import { useState } from "react";
import { FiSearch } from "react-icons/fi";
function App() {
  return (
    <div className="container mx-auto">
      <div className="">
        <section className="content">
          <div className="mt-[20px] flex gap-x-10">
            <div className="flex-col">
              <div className="font-semibold text-lg">January 2022</div>
              <div className="text-sm">Thursday, Jan 4, 2022</div>
            </div>
            <div className="content__search p-4 flex-1">
              <FiSearch />
              <input
                className="ml-2 w-full"
                type="text"
                placeholder="Search location here"
              />
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
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
